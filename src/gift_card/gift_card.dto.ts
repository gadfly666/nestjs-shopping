export class GiftCardDto {
  id: bigint;
  code: string;
  value: bigint;
  balance: bigint;
  orderId: bigint;
  isDisabled: boolean;
  endsAt: Date;
  createdAt: Date;
  updatedAt: Date; 
}