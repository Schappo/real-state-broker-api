// @/models.ts
import { prop, getModelForClass } from "@typegoose/typegoose";
import { BaseModel } from './base.model';

export class User extends BaseModel {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public age!: number;
}

export const UserModel = getModelForClass(User);