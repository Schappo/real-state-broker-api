import { create } from 'apisauce';

import dotenv from 'dotenv';

dotenv.config();
const { GIPHY_BASE_URL } = process.env;

export const client = create({
  baseURL: GIPHY_BASE_URL,
});

export default {
  client,
};
