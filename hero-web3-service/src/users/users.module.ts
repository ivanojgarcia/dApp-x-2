import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { EthersLib } from '@libs/ethers.provider';
import { CoreModule } from '@core/core.module';
import { CoreService } from '@core/core.service';

@Module({
  imports: [CoreModule],
  controllers: [UsersController],
  providers: [UsersService, EthersLib, CoreService],
})
export class UsersModule {}
