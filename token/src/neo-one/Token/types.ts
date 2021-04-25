/* @hash 31fbb6d120d7ddfa9968dc8275e5e82a */
// tslint:disable
/* eslint-disable */
import {
  Client,
  GetOptions,
  InvocationTransaction,
  InvokeReceipt,
  SmartContract,
  TransactionOptions,
  TransactionResult,
} from '@neo-one/client';

export type TokenEvent = never;

export interface TokenSmartContract<TClient extends Client = Client> extends SmartContract<TClient, TokenEvent> {
  readonly deploy: {
    (options?: TransactionOptions): Promise<
      TransactionResult<InvokeReceipt<boolean, TokenEvent>, InvocationTransaction>
    >;
    readonly confirmed: (
      options?: TransactionOptions & GetOptions,
    ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
  };
}

export interface TokenMigrationSmartContract {
  readonly deploy: (
    options?: TransactionOptions & GetOptions,
  ) => Promise<InvokeReceipt<boolean, TokenEvent> & { readonly transaction: InvocationTransaction }>;
}
