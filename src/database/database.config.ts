import * as Joi from 'joi';
import { validate } from '../helpers';
import { ConfigMapping } from '../interfaces';

export interface DatabaseConfig extends ConfigMapping {
  uri: string;
  useNewUrlParser: boolean;
  useCreateIndex: boolean;
  useUnifiedTopology: boolean;
}

export const schema: Joi.ObjectSchema = Joi.object().keys({
  uri: Joi.string().required(),
  useNewUrlParser: Joi.boolean().required(),
  useCreateIndex: Joi.boolean().required(),
  useUnifiedTopology: Joi.boolean().required(),
  useFindAndModify: Joi.boolean(),
});

export const config: ConfigMapping = {
  uri: process.env.DB_URI,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

export default validate(config, schema) as DatabaseConfig;
