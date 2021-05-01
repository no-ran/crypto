import {
  SmartContract,
  MapStorage,
  Fixed,
  Address,
  constant,
} from "@neo-one/smart-contract";

export class Token extends SmartContract {
  public readonly name = "EON";
  public readonly symbol = "EON";
  public readonly decimals = 8;

  // Acts as persistent storage of the current supply in this smart contract.
  private mutableSupply: Fixed<8> = 0;
  //
  private readonly balances = MapStorage.for<Address, Fixed<8>>();

  @constant
  public get totalSupply(): Fixed<8> {
    return this.mutableSupply;
  }

  @constant
  public balanceOf(address: Address): Fixed<8> {
    const balance = this.balances.get(address);

    return balance === undefined ? 0 : balance;
  }
}
