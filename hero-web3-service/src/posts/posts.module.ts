import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { EthersLib } from 'src/lib/ethers.provider';

@Module({
  controllers: [PostsController],
  providers: [PostsService, EthersLib],
})
export class PostsModule {}
