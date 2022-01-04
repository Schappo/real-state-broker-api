import { create } from 'apisauce';
import dotenv from 'dotenv';

dotenv.config();
const { RECIPE_PUPPY_BASE_URL } = process.env;

export const client = create({
  baseURL: RECIPE_PUPPY_BASE_URL,
});

export default {
  client,
};
