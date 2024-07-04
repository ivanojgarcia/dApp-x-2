import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsMapper } from './mappers/posts.mapper';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // @Post()
  // create(@Body() createPostDto: CreatePostDto) {
  //   return this.postsService.create(createPostDto);
  // }

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
