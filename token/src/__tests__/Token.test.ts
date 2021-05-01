/**
 * @jest-environment node
 */
import { withContracts } from "../neo-one/test";
import { Hash256 } from "@neo-one/client";
import BigNumber from "bignumber.js";

describe("Token", () => {
  test("exists", async () => {
    await withContracts(async ({ token }) => {
      expect(token).toBeDefined();
    });
  });
});

describe("Test name symbol decimals", () => {
  test("exists", async () => {
    await withContracts(async ({ token }) => {
      const [name, symbol, decimals] = await Promise.all([
        token.name(),
        token.symbol(),
        token.decimals(),
      ]);
      expect(name).toEqual("EON");
      expect(symbol).toEqual("EON");
      expect(decimals.toNumber()).toEqual(8);
    });
  });
});

describe("Test getters for private fields", () => {
  test("totalsSupply and balanceOf", async () => {
    await withContracts(async ({ token, accountIDs }) => {
      const [totalSupply, balance] = await Promise.all([
        token.totalSupply(),
        token.balanceOf(accountIDs[0].address),
      ]);
      expect(totalSupply.toNumber()).toEqual(0);
      expect(balance.toNumber()).toEqual(0);
    });
  });
});

describe("Test mint tokens", () => {
  test("transfer and mint tokens", async () => {
    await withContracts(async ({ token, accountIDs }) => {
      // We'll use this account for minting because it starts with 10 NEO in it
      const accountID = accountIDs[2];
      const amount = new BigNumber(10);

      // Mint the tokens and verify the transaction succeeds
      const mintTokensResult = await token.mintTokens({
        sendTo: [
          {
            amount,
            asset: Hash256.NEO,
          },
        ],
        from: accountID,
      });
      const mintTokensReceipt = await mintTokensResult.confirmed();
      if (mintTokensReceipt.result.state === "FAULT") {
        throw new Error(mintTokensReceipt.result.message);
      }
      expect(mintTokensReceipt.result.value).toBeUndefined();

      // Check that balance and total supply were updated appropriately
      const [balance, totalSupply] = await Promise.all([
        token.balanceOf(accountID.address),
        token.totalSupply(),
      ]);
      expect(balance.toNumber()).toEqual(amount.toNumber());
      expect(totalSupply.toNumber()).toEqual(amount.toNumber());

      // Attempt a transfer
      const toAccountID = accountIDs[1];
      const transferAmount = new BigNumber(3);
      const transferReceipt = await token.transfer.confirmed(
        accountID.address,
        toAccountID.address,
        transferAmount,
        {
          from: accountID,
        }
      );
      if (transferReceipt.result.state === "FAULT") {
        throw new Error(transferReceipt.result.message);
      }
      expect(transferReceipt.result.value).toEqual(true);

      // Validate the balances are updated appropriately and the total supply has not changed.
      const [fromBalance, toBalance, afterTotalSupply] = await Promise.all([
        token.balanceOf(accountID.address),
        token.balanceOf(toAccountID.address),
        token.totalSupply(),
      ]);
      expect(fromBalance.toNumber()).toEqual(
        amount.minus(transferAmount).toNumber()
      );
      expect(toBalance.toNumber()).toEqual(transferAmount.toNumber());
      expect(afterTotalSupply.toNumber()).toEqual(amount.toNumber());
    });
  });
});
