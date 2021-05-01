/* @hash 2fd90c331f7b1ba0722b6f5d90790738 */
// tslint:disable
/* eslint-disable */
import {
  AddressString,
  Client,
  GetOptions,
  InvocationTransaction,
  InvokeReceipt,
  SmartContract,
  TransactionOptions,
  TransactionResult,
} from '@neo-one/client';
import BigNumber from 'bignumber.js';

export type TokenEvent = never;

export interface TokenSmartContract<TClient extends Client = Client> extends SmartContract<TClient, TokenEvent> {
  readonly balanceOf: (address: AddressString) => Promise<BigNumber>;
  readonly decimals: () => Promise<BigNumber>;
  readonly deploy: {
    (options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, TokenEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly name: () => Promise<string>;
  readonly symbol: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;
}

export interface TokenMigrationSmartContract {
  readonly balanceOf: (address: AddressString | Promise<AddressString>) => Promise<BigNumber>;
  readonly decimals: () => Promise<BigNumber>;
  readonly deploy: (
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  readonly name: () => Promise<string>;
  readonly symbol: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;
}
