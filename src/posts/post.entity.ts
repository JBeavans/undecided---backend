import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostNTT {
    @PrimaryGeneratedColumn()
    postID: number;

    @Column()
    forumID: string;

    @Column()
    title: string;

    @Column()
    threadID: number;

    @Column()
    content: string;

    @Column()
    userID: number;

    // @Column()
    // isThread: boolean;

    @Column()
    replyID: number | null;

    @Column()
    numReplies: number;

    @Column()
    agree: number;

    @Column()
    disagree: number;

}