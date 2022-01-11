import { Request, Response } from 'express'
import Auth from 'src/shared/decorators/authentication.decrator'
import { UserLogin } from 'src/shared/types'
import Controller from '../../shared/decorators/controller.decorator'
import { Post } from '../../shared/decorators/http-method.decorator'
import { getAccessTokenFromRequest } from '../../shared/encryption.functions'
import { AuthenticationService } from './service'

@Controller('/auth')
export class AuthenticationController {
  private readonly service: AuthenticationService = new AuthenticationService()

  @Post('/login')
  async login (req: Request): Promise<{ accessToken: string }> {
    const { username, password }: UserLogin = req.body
    return await this.service.login(username, password)
  }

  @Post('/logout')
  async logout (req: Request): Promise<string> {
    const accessToken = getAccessTokenFromRequest(req)
    return await this.service.logout(accessToken)
  }
}
