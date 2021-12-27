import { Types } from 'mongoose';

export type Projection<T> = Partial<Record<keyof T, 0 | 1>>;

export type MongoId = Types.ObjectId;

export const ObjectId = Types.ObjectId;

export type Nullable<T> = T | null;

export interface PagedRecords<T> {
  total: number;
  pagedData: T[];
}

export type isValidHalf = 1 | 2 | '1' | '2';
