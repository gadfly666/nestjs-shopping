import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "products"})
export class Product {
  @PrimaryGeneratedColumn()
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
  @Column({name: "weight"})
  weight: bigint;
  @Column({name: "height"})
  height: bigint;
  @Column({name: "width"})
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
  @Column({name: "created_at"})
  createdAt: Date;
  @Column({name: "updated_at"})
  updatedAt: Date;
  @Column({name: "title"})
  deletedAt: Date; 
}