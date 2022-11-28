import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbstractEntity } from "../app.entity";

@Entity({name: "users"})
export class User extends AbstractEntity {
  @PrimaryGeneratedColumn({name: "id",type: "bigint"})
  id: bigint;
  @Column({name: "email"})
  email: string;
  @Column({name: "first_name"})
  firstName: string;
  @Column({name: "last_name"})
  lastName: string;
  @Column({name: "username"})
  username: string;
  @Column({name: "password_hash"})
  passwordHash: string;
}

@Entity({name: "user_login_sessions"})
export class UserLoginSession extends AbstractEntity {

  @PrimaryGeneratedColumn({name: "id",type: "bigint"})
  id: bigint;
  @Column({name: "uuid"})
  uuid: string;
  @Column({name: "user_id", type: "bigint"})
  userId: bigint;

}