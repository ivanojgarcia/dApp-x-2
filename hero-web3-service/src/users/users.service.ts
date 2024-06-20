import { Injectable } from '@nestjs/common';
import { EthersLib } from 'src/lib/ethers.provider';
import {
  SMARTCONTRACT_ADDRESS,
  ERC20_ABI,
} from '../core/types/constants/smartcontract.constant';
import { User } from './types/interfaces/users.interfaces';

@Injectable()
export class UsersService {
  constructor(private readonly ethersLib: EthersLib) {}
  async getUser(address: string): Promise<User> {
    const contractAddress = SMARTCONTRACT_ADDRESS;
    const contract = this.ethersLib.getSmartContract(
      contractAddress,
      ERC20_ABI,
    );
    const [username] = await contract.getUser(address);

    return { username, address };
  }
}
