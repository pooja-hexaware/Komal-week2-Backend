import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { Store, StoreSchema } from './store.model';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreRepository } from './store.repo';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Store.name, schema: StoreSchema }])
  ],
  controllers: [StoreController],
  providers: [StoreService,StoreRepository],
})
export class StoreModule {}