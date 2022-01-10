/* eslint-disable no-return-assign */
import bcrypt from 'bcrypt'
import { ApiError } from './exception'

const { SALT_WORK_FACTOR } = process.env

export function generateHash (password: string): string {
  const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

export async function compareHash (reqPass: string, savedPass: string): Promise<boolean> {
  try {
    return await bcrypt.compare(reqPass, savedPass)
  } catch (error) {
    throw new ApiError('Password Incorect', 400)
  }
}
