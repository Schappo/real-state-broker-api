import Controller from '../../shared/decorators/controller.decorator'
import { Delete, Get, Post } from '../../shared/decorators/handler.decorator'
import { User } from '../../shared/models/user.model'
import { MongoId } from '../../shared/types'
import { UserService } from './service'
@Controller('/user')
export class UserController {
  private readonly service: UserService = new UserService()

  @Post('/')
  async create (user: User): Promise<User> {
    return await this.service.create(user)
  }

  @Get('/')
  async findAll (): Promise<User[]> {
    console.log('teste')
    return await this.service.findAll()
  }

  @Get('/:id')
  async findById (id: MongoId): Promise<User> {
    return await this.service.findById(id)
  }

  @Post('/find-one')
  async findOne (query: object): Promise<User> {
    return await this.service.findOne(query)
  }

  @Delete('/:id')
  async delete (id: MongoId): Promise<User> {
    return await this.service.delete(id)
  }
}
