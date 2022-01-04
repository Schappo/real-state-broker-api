import { map } from 'p-iteration';
import { ApiError } from '../shared/exception';
import { Recipe } from './interface';

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
