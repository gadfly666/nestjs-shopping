import { ApiProperty } from "@nestjs/swagger";
// WTF?
import { ProductStatus } from "./product.entity";

export class ProductOptionInput {
  @ApiProperty()
  title: string;
  @ApiProperty()
  metadata: Record<string, any>;
}

export class ProductTypeInput {
  @ApiProperty()
  id: bigint;
  @ApiProperty()
  value: string;
}

export class ProductInput {
  @ApiProperty()
  title: string;
  @ApiProperty()
  subtitle: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  thumbnail: string;
  @ApiProperty()
  profileId: string;
  @ApiProperty()
  weight: bigint;
  @ApiProperty()
  height: bigint;
  @ApiProperty()
  width: bigint;
  @ApiProperty()
  // Manufacturer Identification Code
  midCode: string;
  @ApiProperty()
  material: string;
  @ApiProperty()
  collectionId: string;
  @ApiProperty({type: ProductTypeInput})
  type: ProductTypeInput;
  @ApiProperty({type: [ProductOptionInput]})
  options: ProductOptionInput[]
  @ApiProperty({enum: ProductStatus, default: ProductStatus.DRAFT})
  status: ProductStatus;
  @ApiProperty({type: [String]})
  images: string[];
}

export class MoneyAmountInput {
  id: bigint;
  amount: bigint;
}

export class ProductVariantInput {
  title: string;
  sku: string;
  barcode: string;
  ean: string;
  upc: string;
  variantRank: bigint;
  inventoryQuantity: bigint;
  hsCode: string;
  midCode: string;
  material: string;
  weight: bigint;
  height: bigint;
  lengh: bigint;
  width: bigint;
  prices: MoneyAmountInput[];
}
