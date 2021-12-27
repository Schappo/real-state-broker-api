import * as Joi from 'joi';
import { ConfigMapping } from '../interfaces';

/**
 * Validate configuration files schema.
 * @param config
 * @param schema
 * @returns ConfigMapping
 */
export const validate = (
  config: ConfigMapping,
  schema: Joi.ObjectSchema<any>,
): ConfigMapping => {
  const { error, value: validatedEnvConfig } = schema.validate(config);
  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }
  return validatedEnvConfig;
};
