import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  readonly id: number;
  @Field()
  readonly firstName: string;
  @Field(() => Int)
  readonly age: number = 0;
  @Field()
  readonly lastName: string;
}
