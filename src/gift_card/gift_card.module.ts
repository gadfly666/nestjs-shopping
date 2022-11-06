import { Module } from '@nestjs/common';
import { GiftCardController } from './gift_card.controller';
import { GiftCardProfile } from './gift_card.profile';

@Module({
  imports: [GiftCardProfile],
  controllers: [GiftCardController]
})
export class GiftCardModule {}
