import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { ProductStatus } from "./product.entity";

export class ProductDto {
  @AutoMap()
  @ApiProperty({required: false})
  id: bigint
  @AutoMap()
  @ApiProperty()
  title: string;
  @AutoMap()
  @ApiProperty()
  subtitle: string;
  @AutoMap()
  @ApiProperty()
  description: string;
  @AutoMap()
  @ApiProperty()
  thumbnail: string;
  @AutoMap()
  @ApiProperty()
  profileId: string;
  @AutoMap()
  @ApiProperty()
  weight: bigint;
  @AutoMap()
  @ApiProperty()
  height: bigint;
  @AutoMap()
  @ApiProperty()
  width: bigint;
  @AutoMap()
  @ApiProperty()
  hsCode: string;
  @AutoMap()
  @ApiProperty()
  midCode: string;
  @AutoMap()
  @ApiProperty()
  material: string;
  @AutoMap()
  @ApiProperty()
  collectionId: string;
  @AutoMap()
  @ApiProperty()
  typeId: string;
  @AutoMap()
  @ApiProperty({enum: ProductStatus, default: ProductStatus.DRAFT})
  status: ProductStatus;
  @AutoMap()
  @ApiProperty()
  createdAt: Date;
  @AutoMap()
  @ApiProperty()
  updatedAt: Date;
  @AutoMap()
  @ApiProperty()
  deletedAt: Date; 
}