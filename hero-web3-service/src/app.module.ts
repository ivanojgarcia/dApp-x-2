import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), CoreModule, PostsModule, UsersModule],
})
export class AppModule {}
