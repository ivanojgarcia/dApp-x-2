import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { EthersLib } from 'src/libs/ethers.provider';
import { CoreModule } from 'src/core/core.module';
import { CoreService } from 'src/core/core.service';

@Module({
  imports: [CoreModule],
  controllers: [PostsController],
  providers: [PostsService, EthersLib, CoreService],
})
export class PostsModule {}
