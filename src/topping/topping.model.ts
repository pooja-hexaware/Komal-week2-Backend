import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Topping {
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;
}

export type ToppingDocument = Topping & Document;
export const ToppingSchema = SchemaFactory.createForClass(Topping);