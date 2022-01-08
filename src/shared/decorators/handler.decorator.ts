
import { MetadataKeysEnum, MethodsEnum } from '../enums'
import { IRouter } from '../interfaces'

const methodDecoratorFactory = (method: MethodsEnum) => {
  return (path = '/'): MethodDecorator => {
    return (target, propertyKey) => {
      const controllerClass = target.constructor
      const routers: IRouter[] = Reflect.hasMetadata(MetadataKeysEnum.ROUTERS, controllerClass)
        ? Reflect.getMetadata(MetadataKeysEnum.ROUTERS, controllerClass)
        : []
      routers.push({
        method,
        path,
        handlerName: propertyKey
      })
      Reflect.defineMetadata(MetadataKeysEnum.ROUTERS, routers, controllerClass)
    }
  }
}

export const Get = methodDecoratorFactory(MethodsEnum.GET)
export const Post = methodDecoratorFactory(MethodsEnum.POST)
export const Delete = methodDecoratorFactory(MethodsEnum.DELETE)
export const Path = methodDecoratorFactory(MethodsEnum.PATH)
export const Head = methodDecoratorFactory(MethodsEnum.HEAD)
export const Options = methodDecoratorFactory(MethodsEnum.OPTIONS)
export const Put = methodDecoratorFactory(MethodsEnum.PUT)
