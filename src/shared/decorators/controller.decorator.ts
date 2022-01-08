import { MetadataKeysEnum } from '../enums'

const Controller = (basePath = ''): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(MetadataKeysEnum.BASE_PATH, basePath, target)
  }
}
export default Controller
