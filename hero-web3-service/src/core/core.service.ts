import { Injectable } from '@nestjs/common';
import { AbiItem } from './types/interfaces/core.interface';
import { EthersLib } from '../libs/ethers.provider';
import * as AbiJson from './artifacts/contracts/XdAppManagement.json';

@Injectable()
export class CoreService {
  constructor(private readonly ethersProvider: EthersLib) {}
  async getBalance(address: string) {
    try {
      const provider = this.ethersProvider.getProvider();
      const balance = await provider.getBalance(address);
      return {
        address: address,
        balance: this.ethersProvider.convertToEther(balance),
      };
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  getABIContract() {
    return AbiJson.abi as AbiItem[];
  }

  getSigner(privateKey: string) {
    return this.ethersProvider.getSignerFromPrivateKey(privateKey);
  }
}
