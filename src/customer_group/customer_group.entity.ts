import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbstractEntity } from "../app.entity";

@Entity({name: "customer_groups"})
export class CustomerGroup extends AbstractEntity {
  @PrimaryGeneratedColumn()
  @Column({name: "id"})
  id: bigint;
  @Column({name: "name"})
  name: string;
}