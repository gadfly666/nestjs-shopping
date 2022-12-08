import { AutoMap } from "@automapper/classes";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbstractEntity } from "../app.entity";

// TODO archive table instead of status
export enum ProductStatus {
  DRAFT = "draft",
  PROPOSED = "proposed",
  PUBLISHED = "published",
  REJECTED = "rejected",
  DELTED = "deleted",
}

@Entity({name: "products"})
export class Product extends AbstractEntity {
  @AutoMap()
  @PrimaryGeneratedColumn({name: "id", type: "bigint"})
  id: bigint;
  @AutoMap()
  @Column({name: "title", nullable: true})
  title: string;
  @AutoMap()
  @Column({name: "subtitle", nullable: true})
  subtitle: string;
  @AutoMap()
  @Column({name: "description", nullable: true})
  description: string;
  @AutoMap()
  @Column({name: "thumbnail"})
  thumbnail: string;
  @AutoMap()
  @Column({name: "profile_id", nullable: true})
  // ID of the shipping profile that the product belong tos
  profileId: string;
  @AutoMap()
  @Column({name: "weight", type:'bigint'})
  weight: bigint;
  @AutoMap()
  @Column({name: "height", type: 'bigint'})
  height: bigint;
  @AutoMap()
  @Column({name: "width", type: 'bigint'})
  width: bigint;
  @AutoMap()
  @Column({name: "hs_code", nullable: true})
  hsCode: string;
  @AutoMap()
  @Column({name: "mid_code", nullable: true})
  midCode: string;
  @AutoMap()
  @Column({name: "material", nullable: true})
  material: string;
  @AutoMap()
  @Column({name: "collection_id", nullable: true})
  collectionId: string;
  @AutoMap()
  @Column({name: "type_id", nullable: true})
  typeId: string;
  @AutoMap()
  @Column({
    name: "status",
    type: "enum",
    enum: ProductStatus,
    default: ProductStatus.DRAFT
  })
  status: ProductStatus;
  @AutoMap()
  @Column({name: "external_id", nullable: true})
  externalId: string;
  @AutoMap()
  @Column({name: "deleted_at", nullable: true})
  deletedAt: Date; 
}