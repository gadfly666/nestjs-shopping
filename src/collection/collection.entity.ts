import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "product_collections"})
export class Collection {
  @PrimaryGeneratedColumn()
  @Column({name: "id"})
  id: bigint;
  @Column({name: "title"})
  title: string;
  @Column({name: "handle"})
  handle: string;
  @Column({name: "created_at"})
  createdAt: Date;
  @Column({name: "updated_at"})
  updatedAt: Date;
}