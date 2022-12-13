import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ToppingService } from './topping.service';
import { ToppingController } from './topping.controller';
import { Topping, ToppingSchema } from './topping.model';
import { ToppingRepository } from './topping.repo';


@Module({
  imports: [
    MongooseModule.forFeature([{name: Topping.name, schema: ToppingSchema }])
  ],
  controllers: [ToppingController],
  providers: [ToppingService, ToppingRepository],
})
export class ToppingModule {}