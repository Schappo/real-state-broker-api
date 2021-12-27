import { MongoDocument } from './';

export interface User extends MongoDocument {
  name: string;
  email: string;
  password: string;
}
