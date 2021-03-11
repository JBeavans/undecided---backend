import { CACHE_KEY_METADATA } from "@nestjs/common/cache/cache.constants";

export const POSTS = [
    {postID: 1, forumID: 'USA', threadID: 1, content: "Wassup everybody", userID: 1},
    {postID: 2, forumID: 'CA', threadID: 2, content: "WASSUP CALI", userID: 2},
    {postID: 3, forumID: 'USA', threadID: 1, content: "Hello from SC", userID: 4},
    {postID: 4, forumID: 'Clemson', threadID: 3, content: "Thermo cancelled today. Busy flying.", userID: 4},
    {postID: 5, forumID: 'CA', threadID: 4, content: "NorCal > SoCal", userID: 3},
    {postID: 6, forumID: 'San Francisco', threadID: 5, content: "What are we gonna do about all these homeless people?", userID: 3},
    {postID: 7, forumID: 'Los Angeles', threadID: 6, content: "Why isn't Tacos El Unico a national chain?", userID: 1},
    {postID: 8, forumID: 'Los Angeles', threadID: 6, content: "ikr? sooo good!", userID: 2},
    {postID: 9, forumID: 'Los Angeles', threadID: 7, content: "Anyone seen Tenet yet?", userID: 1},
    {postID: 10, forumID: 'CA', threadID: 4, content: "Said no one ever", userID: 2}
]

const otherPosts = [{"postID":1,"forumID":"USA","threadID":1,"content":"Wassup everybody","userID":2},{"postID":2,"forumID":"CA","threadID":2,"content":"WASSUP CALI","userID":3},{"postID":3,"forumID":"USA","threadID":1,"content":"Hello from SC","userID":6},{"postID":4,"forumID":"Clemson","threadID":3,"content":"Thermo cancelled today. Busy flying.","userID":6},{"postID":5,"forumID":"CA","threadID":4,"content":"NorCal > SoCal","userID":4},{"postID":6,"forumID":"San Francisco","threadID":5,"content":"What are we gonna do about all these homeless people?","userID":4},{"postID":7,"forumID":"Los Angeles","threadID":6,"content":"Why isn't Tacos El Unico a national chain?","userID":2},{"postID":8,"forumID":"Los Angeles","threadID":6,"content":"ikr? sooo good!","userID":3},{"postID":9,"forumID":"Los Angeles","threadID":7,"content":"Anyone seen Tenet yet?","userID":2},{"postID":10,"forumID":"CA","threadID":4,"content":"Said no one ever","userID":3},{"postID":11,"forumID":"CA","threadID":8,"content":"I'm on fire!!!","userID":2}]