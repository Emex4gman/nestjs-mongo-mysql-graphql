import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getHello() {
    return await this.usersService.findAll();
  }

  @Post()
  async saveUser(
    @Body('first') firstName: string,
    @Body('last') lastName: string,
  ) {
    Logger.log(firstName, 'eewee');

    return await this.usersService.creatUser(firstName, lastName);
  }
}
