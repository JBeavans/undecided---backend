export class CreatePostDTO {
    readonly postID: Number;
    readonly forumID: String;
    readonly threadID: Number;
    readonly title: String;
    readonly content: String;
    readonly userID: Number;
    readonly replyID: Number;
    readonly numReplies: Number;
    readonly agree: Number;
    readonly disagree: Number;
}