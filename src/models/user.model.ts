import { modelOptions, plugin, prop } from '@typegoose/typegoose';
import * as mongooseTimestamp from 'mongoose-timestamp';
import { User } from '../interfaces';

@modelOptions({ schemaOptions: { collection: 'users' } })
@plugin(mongooseTimestamp)
export class UserModel {
  @prop({ required: true, trim: true, maxlength: 100 })
  name = '';

  @prop({ required: true, trim: true, select: false })
  password = '';

  @prop({ required: true, trim: true, maxlength: 50, unique: true })
  email = '';
}
