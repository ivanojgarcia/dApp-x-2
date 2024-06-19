import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class CoreService {
  async getBalance(address: string) {
    const mainnet = `${process.env.MAINNET_URL}/${process.env.ALCHEMY_API_KEY}`;
    try {
      const provider = new ethers.JsonRpcProvider(mainnet);
      const balance = await provider.getBalance(address);
      return {
        address: address,
        balance: this.getEthersBalance(balance),
      };
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  private getEthersBalance(balance: bigint) {
    return ethers.formatEther(balance);
  }
}
