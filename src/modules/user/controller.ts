import express, { Request, Response } from 'express';
import { ApiError } from '../../shared/exception';
import { UserService } from './service';

const router = express.Router();

const userService = new UserService();

router.get('/add', async (req: Request, resp: Response) => {
  try {
    const respies = await userService.create();
    // throw new ApiError('BAD REQUEST - The query must contain at least one parameter!', 400);
    return resp.json(respies);
  } catch (error) {
    return resp.json(error.toResponseError());
  }
});

router.get('/', async (req: Request, resp: Response) => {
  try {
    const respies = await userService.findAll();
    // throw new ApiError('BAD REQUEST - The query must contain at least one parameter!', 400);
    return resp.json(respies);
  } catch (error) {
    return resp.json(error.toResponseError());
  }
});

export default router;
