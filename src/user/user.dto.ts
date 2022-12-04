import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterDto {
  @IsEmail()
  email: string;
  firstName: string;
  lastName: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}