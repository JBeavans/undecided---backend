import { Module, Post } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { PostNTT } from 'src/posts/post.entity';


@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 6969,
        username: 'dev',
        password: 'DEVINnnn??',
        database: 'postgres',
        entities: [User, PostNTT],
        synchronize: true,
    })]
})
export class DatabaseModule {}
