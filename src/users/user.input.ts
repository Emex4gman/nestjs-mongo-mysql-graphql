import { InputType, Field,  Int } from '@nestjs/graphql';

@InputType()
export class UserInpute {
  @Field()
  readonly firstName: string;
  @Field(() => Int)
  readonly age: number = 0;
  @Field()
  readonly lastName: string;
}
