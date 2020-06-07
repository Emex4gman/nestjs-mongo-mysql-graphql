import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Sequelize } from 'sequelize-typescript';
import { UserInpute } from './user.input';

@Injectable()
export class UsersService {
  constructor(
    private sequelize: Sequelize,
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async creatUser(firstName: string, lastName: string) {
    await this.userModel.create({ firstName: firstName, lastName: lastName });
  }
  async creatUserSql(userObj: UserInpute) {
    const founduser = await this.userModel.findOne({
      where: { firstName: userObj.firstName },
    });
    Logger.log(founduser, 'founduser');
    if (founduser) {
      return founduser;
    } else {
      return this.userModel.create(userObj);
    }
  }
  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
