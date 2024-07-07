import { Injectable } from '@nestjs/common';
import {
  SMARTCONTRACT_ADDRESS,
  ERC20_ABI,
} from '../core/types/constants/smartcontract.constant';
import { User } from './types/interfaces/users.interfaces';
import { EthersLib } from '@libs/ethers.provider';
import { CoreService } from '@core/core.service';
import { UserCreateDto } from './dto/user-create.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly ethersLib: EthersLib,
    private readonly coreService: CoreService,
  ) {}
  async getUser(address: string): Promise<User> {
    const contract = this.readSmartContract();
    const [username] = await contract.getUser(address);

    return { username, address };
  }

  async createUser(parameter: UserCreateDto): Promise<void> {
    const { username } = parameter;
    const signer = await this.ethersLib.getSigner();
    const contract = this.writeSmartContract(signer);
    const userRegistered = await contract.userRegister(username);
    console.log(userRegistered.hash);
  }

  private readSmartContract() {
    const contractAddress = SMARTCONTRACT_ADDRESS;
    // const erc20Abi = this.coreService.getABIContract();
    const erc20Abi = ERC20_ABI;
    return this.ethersLib.readSmartContract(contractAddress, erc20Abi);
  }

  private writeSmartContract(signer) {
    const contractAddress = SMARTCONTRACT_ADDRESS;
    // const erc20Bi = this.coreService.getABIContract();
    const erc20Abi = ERC20_ABI;
    return this.ethersLib.writeSmartContract(contractAddress, erc20Abi, signer);
  }
}
