
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { ApiError } from '../exception'

const Auth = (role = '') => {
  return function (
    target: object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value
    descriptor.value = async function (...args: any[]) {
      const { SECRET } = process.env

      const request = args[0] as Request

      const response = args[1] as Response

      let { authorization } = request.headers

      if (!authorization) return response.json(new ApiError('Token is not provided!', 400))

      authorization = authorization.replace('Bearer ', '')

      try {
        await jwt.verify(authorization, SECRET)
      } catch (error) {
        response.statusCode = 403
        return response.json(new ApiError('Invalid Token', 403))
      }

      return original.apply(this, args)
    }
  }
}

export default Auth
