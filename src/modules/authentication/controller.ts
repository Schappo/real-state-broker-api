import { User } from '../../shared/models/user.model'
import { AuthenticationService } from './service'

export class AuthenticationController {
  private readonly service: AuthenticationService = new AuthenticationService()

  async login (params: {username: string, password: string}): Promise<User> {
    return await this.service.login(params.username, params.password)
  }

  // async findAll(): Promise<User[]> {
  //   return await this.service.findAll()
  // }

  // async findOne(id: MongoId): Promise<User> {
  //   return await this.service.findOne(id)
  // }
}
