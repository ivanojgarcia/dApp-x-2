import { Injectable } from '@nestjs/common';
import { EthersLib } from 'src/lib/ethers.provider';

@Injectable()
export class CoreService {
  constructor(private readonly ethersProvider: EthersLib) {}
  async getBalance(address: string) {
    try {
      const provider = this.ethersProvider.getProvider();
      const balance = await provider.getBalance(address);
      return {
        address: address,
        balance: this.ethersProvider.getEthersBalance(balance),
      };
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}
