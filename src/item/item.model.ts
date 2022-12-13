import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Item{
    _id: string;

    @Prop({required:true})
    name: string;

    @Prop({required:true})
    price:number;

    @Prop({required:true})
    ingredients:string[];

    @Prop()
    toppings: string[];
}

export type ItemDocument = Item & Document;
export const ItemSchema = SchemaFactory.createForClass(Item);