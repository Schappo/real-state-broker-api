import { UserService } from '../user/service'

export class AuthenticationService {
  private readonly userService = new UserService()

  async login (username: string, password: string): Promise<any> {
    const userPass = await this.userService.find({ username })
    return userPass
  }
}
