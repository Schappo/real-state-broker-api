import express, { Request, Response } from 'express';
import { ApiError } from '../shared/exception';
import { returnElement } from './service';

const router = express.Router();

router.get('/', async (req: Request, resp: Response) => {
  try {
    const respies = await returnElement();
    return resp.json(respies);
  } catch (error) {
    return resp.json(error.toResponseError());
  }
});

export default router;
