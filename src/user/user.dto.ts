import { AutoMap } from "@automapper/classes";
import { IsEmail, IsNotEmpty } from "class-validator";

export class RegisterDto {
  @AutoMap()
  @IsEmail()
  email: string;
  @AutoMap()
  firstName: string;
  @AutoMap()
  lastName: string;
  @IsNotEmpty()
  @AutoMap()
  username: string;
  @IsNotEmpty()
  @AutoMap()
  password: string;
}