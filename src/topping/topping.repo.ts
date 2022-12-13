import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Topping, ToppingDocument } from "./topping.model";

@Injectable()
export class ToppingRepository {
  constructor(@InjectModel(Topping.name) private readonly toppingModel: Model<ToppingDocument>) {}

  async findOne(_id: string) {
    return this.toppingModel.findOne({
      _id
    });
  }

  async findByIds(ids: string[]) {
    return this.toppingModel.find({ _id: { $in: ids }});
  }

  async findAll() {
    return this.toppingModel.find();
  }
}