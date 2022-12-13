import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { ItemRepository } from './item.repo';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from './item.model';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Item.name, schema: ItemSchema }])
  ],
  controllers: [ItemController],
  providers: [ItemService,ItemRepository]
})
export class ItemModule {}
