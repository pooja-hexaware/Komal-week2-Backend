import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { ToppingModule } from './topping/topping.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
  }),
  MongooseModule.forRoot(process.env.MONGO_URL,
    {
    autoCreate:true,
  }),
  StoreModule,
  ToppingModule,
  ItemModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
