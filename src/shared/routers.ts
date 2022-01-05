import { Router } from 'express'
import authRouter from '../modules/authentication/controller'
import userRouter from '../modules/user/controller'

function makeRouterMap(path: string, router: Router) {
  return { path, router}
}

export const allROuters = [
  makeRouterMap('auth', authRouter),
  makeRouterMap('user', userRouter)
]