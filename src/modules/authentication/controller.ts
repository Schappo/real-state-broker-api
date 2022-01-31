import { UserLogin } from 'src/shared/types'
import Auth from '../../shared/decorators/authentication.decrator'
import Controller from '../../shared/decorators/http/controller.decorator'
import { Post } from '../../shared/decorators/http/http-method.decorator'
import { Body, Headers } from '../../shared/decorators/http/request-properties.decorator'
import { AuthenticationService } from './service'

@Controller('/auth')
export class AuthenticationController {
  private readonly service: AuthenticationService = new AuthenticationService()

  @Post('/login')
  async login (@Body() userlogin: UserLogin): Promise<{ accessToken: string }> {
    const { username, password } = userlogin
    return await this.service.login(username, password)
  }

  @Post('/logout')
  @Auth()
  async logout (@Headers('authorization') accessToken: string): Promise<string> {
    return await this.service.logout(accessToken)
  }
}
