import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { EthersLib } from 'src/libs/ethers.provider';
import { SMARTCONTRACT_ADDRESS } from '../core/types/constants/smartcontract.constant';
import { Posts } from './types/interfaces/posts.interfaces';
import { CoreService } from 'src/core/core.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly ethersLib: EthersLib,
    private readonly coreService: CoreService,
  ) {}
  create(createPostDto: CreatePostDto) {
    const erc20Abi = this.coreService.getABIContract();
    const contractAddress = SMARTCONTRACT_ADDRESS;
    return 'This action adds a new post';
  }

  async findAll(): Promise<Posts[]> {
    const contractAddress = SMARTCONTRACT_ADDRESS;
    const erc20Abi = this.coreService.getABIContract();
    const contract = this.ethersLib.readSmartContract(
      contractAddress,
      erc20Abi,
    );
    return await contract.getPosts();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
