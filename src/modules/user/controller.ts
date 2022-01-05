import { User } from '../../shared/models/user.model'
import { MongoId } from '../../shared/types'
import { UserService } from './service'

export class UserController {
  private readonly service: UserService = new UserService()

  async create (user: User): Promise<User> {
    return await this.service.create(user)
  }

  async findAll (): Promise<User[]> {
    return await this.service.findAll()
  }

  async findOne (id: MongoId): Promise<User> {
    return await this.service.findOne(id)
  }
}
