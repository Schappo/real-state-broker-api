import { MethodsEnum } from '../enums'

export * from './authentication.interface'
export * from './exceptionError.interface'

export interface IRouter {
  method: MethodsEnum;
  path: string;
  handlerName: string | symbol;
}
