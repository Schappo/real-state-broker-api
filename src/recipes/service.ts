import { map } from 'p-iteration';
import { ApiError } from '../shared/exception';
import { getGif } from '../giphy/service';
import getRecipePuppyData from '../recipe-puppy/service';
import { Recipe } from './interface';
import { RecipePuppyResults, RecipesPuppyResp } from '../recipe-puppy/interface';

function formatIngredientsData(ingredientsString: string = '') {
  return ingredientsString.split(', ').sort();
}

export function handlerRecipePuppyData(data: RecipesPuppyResp): Promise<Recipe[]> {
  const { results } = data;
  return map(results, async (recipe: RecipePuppyResults): Promise<Recipe> => {
    try {
      const giphyResp = await getGif(recipe.title);
      return {
        title: recipe.title,
        ingredients: formatIngredientsData(recipe.ingredients),
        link: recipe.href,
        gif: giphyResp.data.data[0].url,
      };
    } catch (error) {
      throw new ApiError('Something went worng when called to Giphy API!', 500);
    }
  });
}

export async function searchRecipes(keywords: string[]) {
  const recipePuppyData = await getRecipePuppyData(keywords);
  if (recipePuppyData.ok) {
    return {
      keywords,
      recipes: await handlerRecipePuppyData(recipePuppyData.data),
    };
  }
  throw new ApiError(recipePuppyData.problem, recipePuppyData.status);
}
