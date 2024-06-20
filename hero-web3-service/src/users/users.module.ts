import { Module } from '@nestjs/common';
import { EthersLib } from 'src/lib/ethers.provider';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, EthersLib],
})
export class UsersModule {}
