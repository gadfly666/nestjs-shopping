import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: "gift_cards"})
export class GiftCard {
  @PrimaryGeneratedColumn()
  id: bigint;
  @Column({name: "code"})
  code: string;
  @Column({name: "value"})
  value: bigint;
  @Column({name: "balance"})
  balance: bigint;
  @Column({name: "order_id"})
  orderId: bigint;
  @Column({name: "is_disabled"})
  isDisabled: boolean;
  @Column({name: "ends_at"})
  endsAt: Date;
  @Column({name: "created_at"})
  createdAt: Date;
  @Column({name: "updated_at"})
  updatedAt: Date;
}