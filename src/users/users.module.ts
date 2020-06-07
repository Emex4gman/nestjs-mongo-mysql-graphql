import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService, UsersResolver],
  controllers: [UsersController],
})
export class UsersModule {}
