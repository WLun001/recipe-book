import {Injectable} from '@angular/core';
import {Recipe} from './recipes/recipe.model';
import {Ingredient} from './shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      0,
      'Test recipe 1',
      'test description 1',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
      [new Ingredient('Apple', 5), new Ingredient('Orange', 10)]),
    new Recipe(
      1,
      'Test recipe 2',
      'test description 2',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
      [new Ingredient('Orange', 6)]),
    new Recipe(
      2,
      'Test recipe 3',
      'test description 3',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
      [new Ingredient('Water', 10)]),
    new Recipe(
      3,
      'Test recipe 4',
      'test description 4',
      'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
      [new Ingredient('Kiwi', 12)])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
