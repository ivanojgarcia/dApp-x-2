import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { EthersLib } from '../libs/ethers.provider';

@Module({
  imports: [],
  controllers: [CoreController],
  providers: [CoreService, EthersLib],
})
export class CoreModule {}
