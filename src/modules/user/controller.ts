import { Request } from 'express'
import Auth from 'src/shared/decorators/authentication.decrator'
import Controller from '../../shared/decorators/http/controller.decorator'
import { Delete, Get, Post, Put } from '../../shared/decorators/http/http-method.decorator'
import { User } from '../../shared/models/user.model'

import { UserService } from './service'

@Controller('/user')
export class UserController {
  private readonly service: UserService = new UserService()

  @Post('/')
  @Auth()
  async create (req: Request): Promise<User> {
    const user = req.body
    return await this.service.create(user)
  }

  @Get('/')
  @Auth()
  async findAll (): Promise<User[]> {
    return await this.service.findAll()
  }

  @Get('/:id')
  @Auth()
  async findById (req: Request): Promise<User> {
    const { id } = req.params
    return await this.service.findById(id)
  }

  @Post('/find-one')
  @Auth()
  async findOne (req: Request): Promise<User> {
    const query = req.body
    return await this.service.findOne(query)
  }

  @Delete('/:id')
  @Auth()
  async delete (req: Request): Promise<boolean> {
    const { id } = req.params
    return await this.service.delete(id)
  }

  @Put('/:id')
  @Auth()
  async update (req: Request): Promise<User> {
    const { id } = req.params
    const user = req.body
    return await this.service.update(id, user)
  }
}
