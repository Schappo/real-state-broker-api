import { ReturnModelType } from '@typegoose/typegoose';
import { AnyParamConstructor } from '@typegoose/typegoose/lib/types';
import { User } from '../models/user.model';
import { BaseRepository } from './base.repository';

export class UserRepository extends BaseRepository<User> {
  constructor(
    protected readonly model: ReturnModelType<AnyParamConstructor<User>>
  ) {
    super(model)
  }
}