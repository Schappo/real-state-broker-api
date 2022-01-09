import { UserService } from '../user/service'
import { ApiError } from '../../shared/exception'
import { compareHash } from '../../shared/encrypte.functions'
import jwt from 'jsonwebtoken'
import { User } from 'src/shared/models/user.model'

export type UserLogin = {
  user: User,
  accessToken: string
}
export class AuthenticationService {
  private readonly userService = new UserService()
  private SECRET = process.env.SECRET

  async login(username: string, password: string): Promise<UserLogin> {
    const user = await this.userService.findOne({ username })

    if (!user) throw new ApiError('User Not Found!', 404)

    if (!await compareHash(password, user.password)) throw new ApiError('Incorrect Password', 400)

    delete user.password

    const token = await jwt.sign({ user }, this.SECRET)

    return {
      user,
      accessToken: token
    }
  }
}
