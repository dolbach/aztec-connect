import { EthAddress } from 'barretenberg/address';

export interface DbAccount {
  ethAddress: EthAddress;
  userId: Buffer;
}

export interface Database {
  clear(): Promise<void>;
  close(): Promise<void>;

  addAccount(account: DbAccount): Promise<void>;
  getAccount(ethAddress: EthAddress): Promise<DbAccount | undefined>;
  getAccounts(): Promise<DbAccount[]>;
  deleteAccount(ethAddress: EthAddress): Promise<void>;
}