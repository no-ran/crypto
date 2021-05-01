/**
 * @jest-environment node
 */
import { withContracts } from "../neo-one/test";

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
  test("test totalsSupply and balanceOf", async () => {
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
