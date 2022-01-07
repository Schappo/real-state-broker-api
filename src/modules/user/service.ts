import { DocumentType } from '@typegoose/typegoose'
import { User, UserModel } from '../../shared/models/user.model'
import { UserRepository } from '../../shared/repositories/user.repository'
import { MongoId } from '../../shared/types'

export class UserService {
  private readonly repository: UserRepository = new UserRepository(UserModel)

  async create (user: User): Promise<DocumentType<User>> {
    return await this.repository.create(user)
  }

  async findAll (): Promise<DocumentType<User>[]> {
    return await this.repository.findAll()
  }

  async find (query: object): Promise<DocumentType<User>[]> {
    return await this.repository.find(query)
  }

  async findById (id: MongoId): Promise<DocumentType<User>> {
    return await this.repository.findById(id)
  }

  async findOne (query: object): Promise<DocumentType<User>> {
    return await this.repository.findOne(query)
  }

  async delete (id: MongoId): Promise<DocumentType<any>> {
    return await this.repository.delete(id)
  }
}
