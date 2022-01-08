import { UserService } from '../user/service'
import { ApiError } from '../../shared/exception'
import { compareHash } from '../../shared/encrypte.functions'

export class AuthenticationService {
  private readonly userService = new UserService()

  async login (username: string, password: string): Promise<any> {
    const user = await this.userService.findOne({ username })
    if (!user) throw new ApiError('User Not Found!', 404)

    if (!await compareHash(password, user.password)) throw new ApiError('Incorrect Password')

    return user
  }
}
