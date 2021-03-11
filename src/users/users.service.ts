import { Injectable, HttpException } from '@nestjs/common';
import {USERS} from './users.mock';
import { promises } from 'dns';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'

@Injectable()
export class UsersService {
    

    constructor(
        @InjectRepository(User)
        private usersRepo: Repository<User>,
    ){}

    users = USERS;

    getUsers(): Promise<any> {
        return new Promise(resolve=> {
            //resolve(this.users);
            resolve(this.usersRepo.find())
        })
    }

    getUser(userID: Number): Promise<any> {
        let id = Number(userID);
        return new Promise(resolve=> {
            //const user = this.users.find(user=> user.id === id);
            const user = this.usersRepo.findOne(id);
            if (!user) {
                throw new HttpException('User not found', 404);
            }
            resolve(user);
        })
    }

    //look up how to overload methods in TS

    getUserByName(name: String): Promise<any> {
        let username = String(name);
        return new Promise(resolve=> {
            //const user = allUsers.find(user=> user.username === username);
            const user = this.usersRepo.findOne({username: username})
            if(!user) {
                throw new HttpException('User not found', 404);
            }
            resolve(user);
        })
    }

    addUser(user): Promise<any> {
        return new Promise(async resolve => {
            //this.users.push(user);
            await this.usersRepo.save(user);
            resolve(this.usersRepo.find());
        })
    }

    deleteUser(userID: Number): Promise<any> {
        let id = Number(userID);
        return new Promise(async resolve=> {
            //let index = this.users.findIndex(user => user.id === id);
            const user = await this.usersRepo.findOne(id);
            //if (index === -1) {
            if (!user) {
                throw new HttpException('User does not exist', 404);
            }
            await this.usersRepo.remove(user);
            resolve(this.usersRepo.find());
        })
    }

    deleteUserByName(name: String): Promise<any> {
        let username = String(name);
        return new Promise(async resolve=> {
            //let index = this.users.findIndex(user => user.username === username);
            const user = await this.usersRepo.findOne({username: username})
            //if (index === -1) {
            if (!user) {
                throw new HttpException('Username does not exist', 404);
            }
            await this.usersRepo.remove(user);
            resolve(this.usersRepo.find());
        })
    }
}
