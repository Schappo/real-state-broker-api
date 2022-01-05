import { DocumentType } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { User, UserModel } from '../../shared/models/user.model';
import { UserRepository } from '../../shared/repositories/user.repository';
import { MongoId } from '../../shared/types';
import { UserService } from '../user/service';

export class AuthenticationService {

  constructor(
    private readonly userService = new UserService()
  ) {}

  async login(username: string, password: string): Promise<any> {
    const userPass = await this.userService.find({username})
    return userPass
  }

}
