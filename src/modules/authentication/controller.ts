import { Request, Response } from 'express'
import Auth from 'src/shared/decorators/authentication.decrator'
import { UserLogin } from 'src/shared/types'
import Controller from '../../shared/decorators/controller.decorator'
import { Post } from '../../shared/decorators/http-method.decorator'
import { AuthenticationService } from './service'

@Controller('/auth')
export class AuthenticationController {
  private readonly service: AuthenticationService = new AuthenticationService()

  @Post('/login')
  @Auth()
  async login(req: Request, resp: Response): Promise<Response> {
    try {
      const { username, password }: UserLogin = req.body
      return resp.json(await this.service.login(username, password))
    } catch (error) {
      return resp.json(error)
    }
  }

  // async findAll(): Promise<User[]> {
  //   return await this.service.findAll()
  // }

  // async findOne(id: MongoId): Promise<User> {
  //   return await this.service.findOne(id)
  // }
}
