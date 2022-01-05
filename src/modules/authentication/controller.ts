import express, { Request, Response } from 'express';
import { ObjectId } from 'mongoose';
import { ApiError } from '../../shared/exception';
import { User } from '../../shared/models/user.model';
import { MongoId } from '../../shared/types';
import { AuthenticationService } from './service';

const router = express.Router();

export class AuthenticationController {
  constructor(
    private readonly service: AuthenticationService = new AuthenticationService()
  ) { }

  async login(params: {username: string, password: string}): Promise<User> {
    return await this.service.login(params.username, params.password)
  }

  // async findAll(): Promise<User[]> {
  //   return await this.service.findAll()
  // }

  // async findOne(id: MongoId): Promise<User> {
  //   return await this.service.findOne(id)
  // }
}