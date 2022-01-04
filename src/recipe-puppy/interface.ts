export interface RecipePuppyResults {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}
export interface RecipesPuppyResp {
  title: string;
  version: number;
  href: string;
  results: RecipePuppyResults[];
}
