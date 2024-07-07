import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsMapper } from './mappers/posts.mapper';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiHeaders } from '@nestjs/swagger';
import { HeadersWithValidation } from './dto/header-validation.decorator';
import { HeaderUserAdresssDTO } from './dto/header-user-address.dto';

@ApiHeaders([
  {
    name: 'x-address',
    description: 'Address of the user that is calling the smart contract',
  },
])
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(
    @HeadersWithValidation(() => HeaderUserAdresssDTO)
    headers: HeaderUserAdresssDTO,
    @Body() parameters: CreatePostDto,
  ) {
    console.log('Headers', headers);
    return this.postsService.create(parameters);
  }

  @Get()
  async findAll(): Promise<any[]> {
    const posts = await this.postsService.findAll();
    return PostsMapper.mapContractResponseToPosts(posts);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postsService.update(+id, updatePostDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
