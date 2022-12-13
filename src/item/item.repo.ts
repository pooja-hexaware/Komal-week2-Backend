import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Item, ItemDocument } from "./item.model";

@Injectable()
export class ItemRepository{
    constructor(@InjectModel(Item.name) private readonly itemModel: Model<ItemDocument>){}

    async findOneItem(_id:string){
        return this.itemModel.findOne({_id});
    }

    async findAllItems(){
        return this.itemModel.find();
    }

    async findItemsByIds(ids:string[]){
        return this.itemModel.find({
            _ids: {
                $in:ids 
            }
        });
    }

}