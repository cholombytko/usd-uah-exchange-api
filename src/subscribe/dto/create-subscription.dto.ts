import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateSubscriptionDto {
  @IsEmail()
  @IsNotEmpty()
  public readonly email: string;
}
