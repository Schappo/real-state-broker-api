import { UserService } from '../user/service'
import { ApiError } from '../../shared/exception'
import { compareHash } from '../../shared/encrypte.functions'
import jwt from 'jsonwebtoken'

export type UserLogin = {
  accessToken: string
}

const { SECRET } = process.env
export class AuthenticationService {
  private readonly userService = new UserService()

  async login (username: string, password: string): Promise<UserLogin> {
    const user = await this.userService.findUserWithPassword({ username })

    if (!user) throw new ApiError('User Not Found!', 400)

    if (!await compareHash(password, user.password)) throw new ApiError('Incorrect Password', 400)

    const payload = {
      id: user.id
    }

    return {
      accessToken: await jwt.singIn(payload, SECRET)
    }
  }
}
