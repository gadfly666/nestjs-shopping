import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { AbstractEntity } from "../app.entity";

@Entity({name: "discount_conditions"})
export class DiscountCondition extends AbstractEntity {
  @PrimaryGeneratedColumn()
  @Column({name: "id"})
  id: bigint;
  @Column({name: "type"})
  type: string;
  @Column({name: "operator"})
  operator: string;
  @Column({name: "discount_rule_id"})
  discountRuleId: bigint;
}