import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipes/recipe.model';
import {Ingredient} from './shared/ingredient.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'test description 1',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
      [new Ingredient('Apple', 5)]),
    new Recipe(
      'Test recipe 2',
      'test description 2',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
      [new Ingredient('Orange', 6)]),
    new Recipe(
      'Test recipe 3',
      'test description 3',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
      [new Ingredient('Water', 10)]),
    new Recipe(
      'Test recipe 4',
      'test description 4',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
      [new Ingredient('Kiwi', 12)])
  ];

  constructor() {
  }

  getRecipe() {
    return this.recipes.slice();
  }
}
