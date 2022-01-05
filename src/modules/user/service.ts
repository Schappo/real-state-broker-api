import { DocumentType } from '@typegoose/typegoose';
import { User, UserModel } from '../../shared/models/user.model';
import { UserRepository } from '../../shared/repositories/user.repository';

export class UserService {
  constructor(
    private readonly repository: UserRepository = new UserRepository(UserModel)
  ) { }

  async create(): Promise<DocumentType<User>> {
    const user: User = {
      name: 'Felipe',
      age: 12
    }
    return await this.repository.create(user)
  }

  async findAll(): Promise<DocumentType<User>[]> {
    return await this.repository.findAll()
  }
}
