import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { EthersLib } from 'src/lib/ethers.provider';
import {
  SMARTCONTRACT_ADDRESS,
  ERC20_ABI,
} from '../core/types/constants/smartcontract.constant';
import { Posts } from './types/interfaces/posts.interfaces';

@Injectable()
export class PostsService {
  constructor(private readonly ethersLib: EthersLib) {}
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  async findAll(): Promise<Posts[]> {
    const contractAddress = SMARTCONTRACT_ADDRESS;
    const contract = this.ethersLib.getSmartContract(
      contractAddress,
      ERC20_ABI,
    );
    const postsResponse = await contract.getPosts();
    // TODO: Recursive response from the smartContract response

    return [
      {
        title: '',
        description: '',
      },
    ];
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
