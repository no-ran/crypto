/* @hash 6b5ddc626233d1c9da5b4723ca3e0ede */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';
import { TokenSmartContract } from './types';
import { tokenABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'ALK8GK1jEVpbBHD3ey5fDaFWGk9KmhUTH7',
    },
  },
  abi: tokenABI,
  sourceMaps,
};

export const createTokenSmartContract = <TClient extends Client>(client: TClient): TokenSmartContract<TClient> =>
  client.smartContract(definition);
