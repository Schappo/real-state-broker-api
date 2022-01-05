import { ApiError } from '../../shared/exception';
import { Recipe } from '../../shared/interfaces/Authentication.interface';

type ReturnElementType = {
  a: number,
  b: number
}

export function returnElement(): ReturnElementType {
  return {
    a: 1,
    b: 2
  }
}
