import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async getUsers() {
        const users = await this.usersService.getUsers();
        return users;
    }

    @Get('id/:userID')
    async getUser(@Param('userID') userID: Number) {
        const user = await this.usersService.getUser(userID);
        return  user;
    }

    @Get('name/:name')
    async getUserByName(@Param('name') name: String) {
        const user = await this.usersService.getUserByName(name);
        return user;
    }

    @Post()
    async addUser(@Body() createUserDTO: CreateUserDTO) {
        const users = await this.usersService.addUser(createUserDTO); //DTO = data transfer object
        return users;
    }

    @Delete()
    async deleteUser(@Query() query) {
        const users = await this.usersService.deleteUser(Number(query.userID));
        return users;
    }

    @Delete('name')
    async deleteUserByName(@Query() query) {
        const users = await this.usersService.deleteUserByName(query.username);
        return users;
    }
}
