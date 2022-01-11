import { DocumentType } from '@typegoose/typegoose'
import { ApiError } from '../../shared/exception'
import { User, UserModel } from '../../shared/models/user.model'
import { UserRepository } from '../../shared/repositories/user.repository'
import { MongoId } from '../../shared/types'

export class UserService {
  private readonly repository: UserRepository = new UserRepository(UserModel)

  async create (user: User): Promise<DocumentType<User>> {
    const createdUser = await this.repository.create(user)
    createdUser.password = undefined
    return createdUser
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

  async findUserWithPassword (query: object): Promise<DocumentType<User>> {
    return await this.repository.findOneWithPassword(query)
  }

  async delete (id: MongoId): Promise<boolean> {
    return Boolean(await this.repository.delete(id))
  }

  async update (id: MongoId, newUser: User): Promise<DocumentType<User>> {
    const user: User = await this.repository.findById(id)

    if (!user) throw new ApiError('Uer Not Found', 404)

    newUser.password = undefined

    return await this.repository.update(id, newUser)
  }
}
