import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDto } from './dto/user-create.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':address')
  getUser(@Param('address') address: string) {
    return this.usersService.getUser(address);
  }

  @Post()
  createUser(@Body() parameters: UserCreateDto) {
    return this.usersService.createUser(parameters);
  }
}
