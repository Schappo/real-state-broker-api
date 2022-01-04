import express, { Request, Response } from 'express';
import { ApiError } from '../shared/exception';
import { searchRecipes } from './service';

const router = express.Router();

const checkQueryParam = (keywords: string[]) => {
  const qttKeywords = keywords.length;
  if (qttKeywords <= 0) {
    throw new ApiError('BAD REQUEST - The query must contain at least one parameter!', 400);
  }
  if (qttKeywords > 3) {
    throw new ApiError('BAD REQUEST - The query cannot have more than three parameter!', 400);
  }
  return true;
};

router.get('/', async (req: Request, resp: Response) => {
  const { query } = req;
  const keywordsString: string = (query && query.i) ? query.i.toString() : null;
  const keywords: string[] = keywordsString ? keywordsString.split(',') : [];
  try {
    checkQueryParam(keywords);
    const respies = await searchRecipes(keywords);
    return resp.json(respies);
  } catch (error) {
    return resp.json(error.toResponseError());
  }
});

export default router;
