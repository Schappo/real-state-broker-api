import { ApiResponse } from 'apisauce';
import { ErrorResponse } from '../shared/exception/interfaces';
import { RecipesPuppyResp } from './interface';
import recipePuppyApi from './recipePuppyApi.config';

export default async function getRecipePuppyData(query: object): Promise<ApiResponse<RecipesPuppyResp, ErrorResponse>> {
  return await recipePuppyApi.client.get<RecipesPuppyResp, ErrorResponse>('/', query);
}
