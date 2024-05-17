import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateSubscribtionDto {
  @IsEmail()
  @IsNotEmpty()
  public readonly email: string;
}
