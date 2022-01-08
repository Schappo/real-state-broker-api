import { Request, Response } from 'express'
import Controller from '../../shared/decorators/controller.decorator'
import { Delete, Get, Post } from '../../shared/decorators/handler.decorator'
import { UserService } from './service'
@Controller('/user')
export class UserController {
  private readonly service: UserService = new UserService()

  @Post('/')
  async create (req: Request, resp: Response): Promise<Response> {
    try {
      const user = req.body
      return resp.json(await this.service.create(user))
    } catch (error) {
      return resp.json(error)
    }
  }

  @Get('/')
  async findAll (req: Request, resp: Response): Promise<Response> {
    try {
      return resp.json(await this.service.findAll())
    } catch (error) {
      return resp.json(error)
    }
  }

  @Get('/:id')
  async findById (req: Request, resp: Response): Promise<Response> {
    try {
      const { id } = req.params
      return resp.json(await this.service.findById(id))
    } catch (error) {
      return resp.json(error)
    }
  }

  @Post('/find-one')
  async findOne (req: Request, resp: Response): Promise<Response> {
    try {
      const query = req.body
      return resp.json(await this.service.findOne(query))
    } catch (error) {
      return resp.json(error)
    }
  }

  @Delete('/:id')
  async delete (req: Request, resp: Response): Promise<Response> {
    try {
      const { id } = req.params
      return resp.json(await this.service.delete(id))
    } catch (error) {
      return resp.json(error)
    }
  }
}
