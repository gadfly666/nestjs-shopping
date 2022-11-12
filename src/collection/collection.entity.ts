import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbstractEntity } from "../app.entity";

@Entity({name: "product_collections"})
export class Collection extends AbstractEntity {
  @PrimaryGeneratedColumn()
  @Column({name: "id"})
  id: bigint;
  @Column({name: "title"})
  title: string;
  @Column({name: "handle"})
  handle: string;
}