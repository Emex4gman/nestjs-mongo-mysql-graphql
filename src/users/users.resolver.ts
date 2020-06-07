import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserType } from './user.type';
import { UserInpute } from './user.input';
@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserType])
  async getUsers() {
    return await this.usersService.findAll();
  }
  @Query(() => String)
  async yesy() {
    return 'await this.usersService.findAll()';
  }
  @Mutation(() => UserType || String)
  async creatUser(@Args('input') input: UserInpute) {
    return await this.usersService.creatUserSql(input);
  }
}
