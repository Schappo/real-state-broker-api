// @/models.ts
import { prop, getModelForClass, pre, DocumentType } from '@typegoose/typegoose'
import { Document } from 'mongoose'
import { generateHash } from '../encrypte.functions'
import { BaseModel } from './base.model'

@pre('save', function (next) {
  const currentUser: any = this

  if (!this.isModified('password')) return next()

  const hashedPassword = generateHash(currentUser.password)

  if (hashedPassword) currentUser.password = hashedPassword

  next()
})
export class User extends BaseModel {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public password: string;

  @prop({ required: true, unique: true })
  public username!: string;

  @prop({ required: true })
  public age!: number;
}

export const UserModel = getModelForClass(User)
