import { MetadataKeysEnum } from '../../enums'

const Controller = (prefix = '/'): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(MetadataKeysEnum.PREFIX, prefix, target)
    // Since routes are set by our methods this should almost never be true (except the controller has no methods)
    if (!Reflect.hasMetadata(MetadataKeysEnum.ROUTES, target)) {
      Reflect.defineMetadata(MetadataKeysEnum.ROUTES, [], target)
    }
  }
}
export default Controller
