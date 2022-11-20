import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbstractEntity } from "../app.entity";

@Entity({name: "admins"})
export class Admin extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: bigint;
  @Column({name: "username"})
  username: string;
  @Column({name: "password"})
  password: string;
}

@Entity({name: "admin_login_sessions"})
export class AdminLoginSession extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: bigint;
  @Column({name: "uuid"})
  uuid: string;
  @Column({name: "userId"})
  userId: bigint;
}