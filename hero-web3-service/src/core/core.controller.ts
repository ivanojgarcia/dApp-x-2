import { Controller, Get, Param } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller('core')
export class CoreController {
  constructor(private readonly coreService: CoreService) {}

  @Get('/get-balance/:address')
  getBalance(@Param('address') address: string) {
    return this.coreService.getBalance(address);
  }
}
