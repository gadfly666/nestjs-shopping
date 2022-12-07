import { ApiProperty } from "@nestjs/swagger";

export class ProductDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  subtitle: string;
  @ApiProperty()
  decription: string;
  @ApiProperty()
  thumbnail: string;
  @ApiProperty()
  profile_id: string;
  @ApiProperty()
  weight: bigint;
  @ApiProperty()
  height: bigint;
  @ApiProperty()
  width: bigint;
  @ApiProperty()
  hs_code: string;
  @ApiProperty()
  mid_code: string;
  @ApiProperty()
  material: string;
  @ApiProperty()
  collection_id: string;
  @ApiProperty()
  type_id: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  external_id: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  deleted_at: Date; 
}