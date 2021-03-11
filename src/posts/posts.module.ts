import { Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostNTT } from './post.entity';



@Module({
  imports: [TypeOrmModule.forFeature([PostNTT])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
