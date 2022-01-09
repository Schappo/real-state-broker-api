import { Request, Response } from 'express'
import Auth from 'src/shared/decorators/authentication.decrator'
import Controller from '../../shared/decorators/controller.decorator'
import { Delete, Get, Post } from '../../shared/decorators/http-method.decorator'
import { UserService } from './service'
@Controller('/user')
export class UserController {
  private readonly service: UserService = new UserService()

  @Post('/')
  @Auth()
  async create(req: Request, resp: Response): Promise<Response> {
    try {
      const user = req.body
      return resp.json(await this.service.create(user))
    } catch (error) {
      return resp.json(error)
    }
  }

  @Get('/')
  @Auth()
  async findAll(req: Request, resp: Response): Promise<Response> {
    try {
      return resp.json(await this.service.findAll())
    } catch (error) {
      return resp.json(error)
    }
  }

  @Get('/:id')
  @Auth()
  async findById(req: Request, resp: Response): Promise<Response> {
    try {
      const { id } = req.params
      return resp.json(await this.service.findById(id))
    } catch (error) {
      return resp.json(error)
    }
  }

  @Post('/find-one')
  @Auth()
  async findOne(req: Request, resp: Response): Promise<Response> {
    try {
      const query = req.body
      return resp.json(await this.service.findOne(query))
    } catch (error) {
      return resp.json(error)
    }
  }

  @Delete('/:id')
  @Auth()
  async delete(req: Request, resp: Response): Promise<Response> {
    try {
      const { id } = req.params
      return resp.json(await this.service.delete(id))
    } catch (error) {
      return resp.json(error)
    }
  }
}
