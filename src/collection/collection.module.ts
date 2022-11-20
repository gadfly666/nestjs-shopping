import { Module } from '@nestjs/common';
import { CollectionController } from './collection.controller';
import { CollectionProfile } from './collection.profile';

@Module({
  imports: [CollectionProfile],
  controllers: [CollectionController]
})
export class CollectionModule {}
