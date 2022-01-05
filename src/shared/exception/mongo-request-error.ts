import { ErrorReponseData } from '../interfaces/exceptionError.interfaces'

export class MongoRequestError extends Error {
  constructor (
    readonly message: string = 'Mongo Request Error!',
    readonly statusCode: number = 400
  ) {
    super()
    this.message = message
    this.statusCode = statusCode
  }

  toResponseError (): ErrorReponseData {
    return {
      message: this.message,
      statusCode: this.statusCode
    }
  }
}
