import { Column } from "typeorm";

export abstract class AbstractEntity {
  @Column({name: "created_at"})
  createdAt: Date;
  @Column({name: "updated_at"})
  updatedAt: Date;
}