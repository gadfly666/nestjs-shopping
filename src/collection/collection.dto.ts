import { ApiProperty } from "@nestjs/swagger";

export class CollectionDto {
  @ApiProperty()
  id: bigint;
  @ApiProperty()
  title: string;
  @ApiProperty()
  handle: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date; 
}