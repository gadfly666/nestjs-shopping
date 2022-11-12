import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbstractEntity } from "../app.entity";

@Entity({name: "customers"})
export class Customer extends AbstractEntity {
  @PrimaryGeneratedColumn()
  @Column({name: "id"})
  id: bigint;
  @Column({name: "email"})
  email: string;
  @Column({name: "first_name"})
  firstName: string;
  @Column({name: "last_name"})
  lastName: string;
  @Column({name: "billing_address_id"})
  billingAddressId: bigint;
  @Column({name: "password_hash"})
  passwordHash: string;
  @Column({name: "phone"})
  phone: string;
  @Column({name: "has_account"})
  hasAccount: boolean;
}