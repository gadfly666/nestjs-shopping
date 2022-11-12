export class DiscountDto {
  id: bigint;
  code: string;
  isDynamic: boolean;
  ruleId: bigint;
  isDisabled: boolean;
  parentDiscountId: bigint;
  startsAt: Date;
  endsAt: string;
  usageLimit: string;
  usageCount: string;
  validDuration: string;
}