import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePostDTO } from './create-post.dto';
import { PostsService } from './posts.service';
//import { CreatePostsDTO } from './create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Get()
    async getPosts() {
        const posts = await this.postsService.getPosts();
        return posts;
    }

    @Get('id/:postID')
    async getPost(@Param('postID') postID: Number) {
        const post = await this.postsService.getPost(postID);
        return post;
    }

    @Get('forum/:forumID')
    async getPostsByForum(@Param('forumID') forumID: String) {
        const posts = await this.postsService.getPostsByForum(forumID);
        return posts;
    }

    @Get('threadcount')
    async getThreadCount() {
        const threadCount = await this.postsService.getThreadCount();
        return threadCount;
    }

    @Get('thread/:threadID')
    async getPostsByThread(@Param('threadID') threadID: number) {
        const thread = await this.postsService.getPostsByThread(threadID);
        return thread;
    }

    @Get('replies/:postID')
    async getReplies(@Param('postID') postID: number) {
        const replies = await this.postsService.getReplies(postID);
        return replies;
    }

    @Get('numReplies/:postID')
    async getNumReplies(@Param('postID') postID: number) {
        const replies = await this.postsService.getNumReplies(postID);
        return replies;
    }

    @Post()
    async addPost(@Body() createPostDTO: CreatePostDTO) {
        const posts = await this.postsService.addPost(createPostDTO);
        return posts;
    }

    // @Put('/isThread/:threadID')
    // async updateThreadRoot(@Param('threadID') threadID: number) {
    //     const thread = await this.postsService.updateThreadRoot(threadID);
    //     return thread;
    // }

    @Put ('updateReplies/:postID')
    async addReply(@Param('postID') postID: number) {
        const numReplies = await this.postsService.addReply(postID);
        return numReplies;
    }

}
