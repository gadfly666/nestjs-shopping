import { Column } from "typeorm";

export abstract class AbstractEntity {
  @Column({name: "created_at", type: "timestamp without time zone"})
  createdAt: Date;
  @Column({name: "updated_at", type: "timestamp without time zone"})
  updatedAt: Date;
}