import { Injectable, HttpException } from '@nestjs/common';
import {POSTS} from './posts.mock';
import { promises } from 'dns';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostNTT } from './post.entity';
import { resolve } from 'path';


@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(PostNTT)
            private postRepo: Repository<PostNTT>,
    ){}
    posts = POSTS;

    getPosts(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.postRepo.find());
        })
    }

    getPost(postID: Number): Promise<any> {
        let id = Number(postID);
        return new Promise(resolve => {
            const post  = this.postRepo.findOne(id);
            if (!post) {
                throw new HttpException('Post not found', 404);
            }
            resolve(post);
        })
    }

    getPostsByForum(forumID: String): Promise<any> {
        let id = String(forumID);
        return new Promise(async resolve => {
            // const forum  = this.postRepo.find({forumID: id});
            const forum = await this.postRepo
                .createQueryBuilder("forum")
                .where("forum.forumID = :forumID", {forumID: id})
                .orderBy({"forum.threadID" : "DESC", "forum.postID" : "ASC"})
                .getMany();
            if (!forum) {
                throw new HttpException('forum not found', 404);
            }
            resolve(forum);
        })
    }

    addPost(post): Promise<any> {
        return new Promise(async resolve => {
            //this.users.push(user);
            await this.postRepo.save(post);
            resolve(this.postRepo.find());
        })
    }

    getThreadCount(): Promise<any> {
        return new Promise(async resolve=> {
            const query = await this.postRepo
                .createQueryBuilder("threadCount")
                .select("MAX(threadCount.threadID)", "max")
                .getRawOne();
            resolve(query);
        })
    }

    getPostsByThread(threadID: number): Promise<any> {
        let id = Number(threadID);
        return new Promise(async resolve => {
            const thread  = await this.postRepo
                .createQueryBuilder("thread")
                .where("thread.threadID = :threadID", {threadID: id})
                .orderBy("thread.postID")
                .getMany();
            if (!thread) {
                throw new HttpException('thread not found', 404);
            }
            resolve(thread);
        })
    }

    getReplies(postID: number): Promise<any> {
        let id = Number(postID);
        return new Promise(async resolve => {
            const miniThread = await this.postRepo
                .createQueryBuilder("miniThread")
                .where("miniThread.replyID = :postID", {postID: id})
                .orderBy("miniThread.postID")
                .getMany();
            if (!miniThread) {
                throw new HttpException('minithread not found', 404);
            }
            resolve(miniThread);
        })
    }

    // updateThreadRoot(threadID: number): Promise<any> {
    //     let t_id = Number(threadID);
    //     return new Promise(async resolve => {
    //         const thread = await this.getPostsByThread(t_id);
    //         if (!thread) {
    //             throw new HttpException('could not access thread', 404);
    //         }
    //             const post = thread[0];
    //             const pid = post.postID
    //             //update isThreadParam
    //             await this.postRepo
    //                 .createQueryBuilder()
    //                 .update()
    //                 .set({isThread: true})
    //                 .where("postID = :id", {id: pid})
    //                 .execute();
                
    //             const updatedPost = await this.getPost(pid);
    //             if (!updatedPost.isThread) {
    //                 throw new HttpException('did not update properly', 404);
    //             }
            
    //         resolve(updatedPost);
    //     })
    // }

    addAgree(postID: number): Promise<any> {
        return new Promise(async resolve => {
            const post =  await this.getPost(postID);
            this.postRepo
                    .createQueryBuilder()
                    .update()
                    .set({agree: post.agree + 1})
                    .where("postID = :id", {id: postID})
                    .execute();
            const updatedPost = await this.getPost(postID);
            resolve(updatedPost.agree);
        })
    }

    removeAgree(postID: number): Promise<any> {
        return new Promise(async resolve => {
            const post =  await this.getPost(postID);
            this.postRepo
                    .createQueryBuilder()
                    .update()
                    .set({agree: post.agree - 1})
                    .where("postID = :id", {id: postID})
                    .execute();
            const updatedPost = await this.getPost(postID);
            resolve(updatedPost.agree);
        })
    }

    addDisagree(postID: number): Promise<any> {
        return new Promise(async resolve => {
            const post =  await this.getPost(postID);
            this.postRepo
                    .createQueryBuilder()
                    .update()
                    .set({disagree: post.disagree + 1})
                    .where("postID = :id", {id: postID})
                    .execute();
            const updatedPost = await this.getPost(postID);
            resolve(updatedPost.disagree);
        })
    }

    removeDisagree(postID: number): Promise<any> {
        return new Promise(async resolve => {
            const post =  await this.getPost(postID);
            this.postRepo
                    .createQueryBuilder()
                    .update()
                    .set({disagree: post.disagree - 1})
                    .where("postID = :id", {id: postID})
                    .execute();
            const updatedPost = await this.getPost(postID);
            resolve(updatedPost.disagree);
        })
    }

    addReply(postID: number): Promise<any> {
        return new Promise(async resolve => {
            const post =  await this.getPost(postID);
            this.postRepo
                    .createQueryBuilder()
                    .update()
                    .set({numReplies: post.numReplies + 1})
                    .where("postID = :id", {id: postID})
                    .execute();
            const updatedPost = await this.getPost(postID)
            resolve(updatedPost.numReplies);
        })
    }

    removeReply(postID: number): Promise<any> {
        return new Promise(async resolve => {
            const post =  await this.getPost(postID);
            this.postRepo
                    .createQueryBuilder()
                    .update()
                    .set({numReplies: post.numReplies - 1})
                    .where("postID = :id", {id: postID})
                    .execute();
            const updatedPost = await this.getPost(postID);
            resolve(updatedPost.numReplies);
        })
    }
    
    getNumReplies(postID: number): Promise<any> {
        return new Promise(async resolve => {
            const post = await this.getPost(postID);
            resolve(post.numReplies);
        })
    }
}
