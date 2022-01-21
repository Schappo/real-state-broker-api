import { UserService } from '../user/service'
import { ApiError } from '../../shared/exception'
import { compareHash } from '../../shared/encryption.functions'
import jwt from 'jsonwebtoken'
import { RedisService } from '../../shared/redis/redis.service'

export type UserLogin = {
  accessToken: string
}

export class AuthenticationService {
  private readonly userService = new UserService()
  private readonly redisService = new RedisService()
  private readonly SECRET = process.env.SECRET

  async login (username: string, password: string): Promise<UserLogin> {
    const user = await this.userService.findUserByPassword({ username })

    if (!user) throw new ApiError('User Not Found!', 400)

    if (!await compareHash(password, user.password)) throw new ApiError('Incorrect Password', 400)

    const payload = {
      id: user.id,
      exp: Math.floor(Date.now() / 1000) + (60)
    }

    return {
      accessToken: await jwt.sign(payload, this.SECRET)
    }
  }

  async logout (accessToken: string): Promise<string> {
    const payload = jwt.verify(accessToken, this.SECRET)
    return await this.redisService.setToken(payload.id, accessToken, payload.exp)
  }
}
