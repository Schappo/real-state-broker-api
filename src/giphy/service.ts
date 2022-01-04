import { ApiResponse } from 'apisauce';
import { ErrorResponse } from '../shared/exception/interfaces';
import giphyApi from './giphyApi.config';

const { GIPHY_API_KEY } = process.env;

export async function getGif(search: string = ''): Promise<ApiResponse<any, ErrorResponse>> {
  const query = {
    q: search,
    api_key: GIPHY_API_KEY,
    limit: 1,
  };
  return await giphyApi.client.get<any, ErrorResponse>('/search', query);
}
