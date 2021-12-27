import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '../interfaces';
import { UserModel } from '../models';
import { BaseRepository } from './base.repository';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(
    @InjectModel(UserModel) model: ReturnModelType<typeof UserModel | any>,
  ) {
    super(model);
  }
}
