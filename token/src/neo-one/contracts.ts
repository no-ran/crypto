/* @hash f7daad3d74311d3eec96cd78bc1fbdb3 */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';

import { TokenSmartContract, TokenMigrationSmartContract } from './Token/types';

import { createTokenSmartContract } from './Token/contract';

export interface Contracts<TClient extends Client = Client> {
  readonly token: TokenSmartContract<TClient>;
}
// Refer to the MigrationSmartContract documentation at https://neo-one.io/docs/deployment for more information.
export interface MigrationContracts {
  readonly token: TokenMigrationSmartContract;
}

export const createContracts = <TClient extends Client>(client: TClient): Contracts<TClient> => ({
  token: createTokenSmartContract(client),
});
