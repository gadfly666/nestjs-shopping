import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbstractEntity } from "../app.entity";

@Entity({name: "products"})
export class Product extends AbstractEntity {
  @PrimaryGeneratedColumn({name: "id",type: "bigint"})
  id: bigint;
  @Column({name: "title"})
  title: string;
  @Column({name: "subtitle"})
  subtitle: string;
  @Column({name: "description"})
  description: string;
  @Column({name: "thumbnail"})
  thumbnail: string;
  @Column({name: "profile_id"})
  profileId: string;
  @Column({name: "weight", type:'bigint'})
  weight: bigint;
  @Column({name: "height", type: 'bigint'})
  height: bigint;
  @Column({name: "width", type: 'bigint'})
  width: bigint;
  @Column({name: "hs_code"})
  hsCode: string;
  @Column({name: "mid_code"})
  midCode: string;
  @Column({name: "material"})
  material: string;
  @Column({name: "collection_id"})
  collectionId: string;
  @Column({name: "type_id"})
  typeId: string;
  @Column({name: "status"})
  status: string;
  @Column({name: "external_id"})
  externalId: string;
  @Column({name: "deleted_at"})
  deletedAt: Date; 
}