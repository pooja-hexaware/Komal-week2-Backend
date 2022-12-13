import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Store, StoreDocument } from "./store.model";

@Injectable()
export class StoreRepository {
  constructor(@InjectModel(Store.name) private readonly storeModel: Model<StoreDocument>) {}

  async findOne(_id: string) {
    return this.storeModel.findOne({
      _id
    });
  }

  async findAll() {
    return this.storeModel.find()
  }
}