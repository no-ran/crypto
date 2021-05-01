/* @hash 9e91499bfbe00cf65652eb6e3d8df308 */
// tslint:disable
/* eslint-disable */
import {
  AddressString,
  Client,
  GetOptions,
  InvocationTransaction,
  InvokeReceipt,
  InvokeReceiveTransactionOptions,
  InvokeSendUnsafeTransactionOptions,
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
    (owner?: AddressString, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, TokenEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      owner?: AddressString,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly mintTokens: {
    (options?: InvokeReceiveTransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, TokenEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: InvokeReceiveTransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly name: () => Promise<string>;
  readonly owner: () => Promise<AddressString>;
  readonly refundAssets: {
    (options?: InvokeSendUnsafeTransactionOptions): Promise<
      TransactionResult<InvokeReceipt<undefined, TokenEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: InvokeSendUnsafeTransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<undefined, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
  readonly symbol: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;
  readonly transfer: {
    (from: AddressString, to: AddressString, amount: BigNumber, options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, TokenEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      from: AddressString,
      to: AddressString,
      amount: BigNumber,
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
}

export interface TokenMigrationSmartContract {
  readonly balanceOf: (address: AddressString | Promise<AddressString>) => Promise<BigNumber>;
  readonly decimals: () => Promise<BigNumber>;
  readonly deploy: (
    owner?: AddressString | Promise<AddressString>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  readonly mintTokens: (
    options?: InvokeReceiveTransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  readonly name: () => Promise<string>;
  readonly owner: () => Promise<AddressString>;
  readonly refundAssets: (
    options?: InvokeSendUnsafeTransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<undefined, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  readonly symbol: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;
  readonly transfer: (
    from: AddressString | Promise<AddressString>,
    to: AddressString | Promise<AddressString>,
    amount: BigNumber | Promise<BigNumber>,
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
}
