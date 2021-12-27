import { Types } from 'mongoose';

export interface ConfigMapping {
  [key: string]: any;
}

export interface HashMap {
  [key: string]: any;
}

export interface MongoDocument {
  _id?: Types.ObjectId;
}

export interface Timestamped {
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface RealOBZResult<T> {
  real: T;
  obz: T;
}

export interface BetweenDateType {
  start: Date;
  end: Date;
  startField?: string;
  endField?: string;
}

export interface DateQuery {
  $gte: Date;
  $lte: Date;
}

export interface Address {
  street: string;
  district: string;
  postalCode: string;
  number: string;
  state: string;
  city: string;
  complement?: string;
}
