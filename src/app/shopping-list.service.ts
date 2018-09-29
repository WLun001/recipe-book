import {Ingredient} from './shared/ingredient.model';
import {EventEmitter} from '@angular/core';


export class ShoppingListService {
  private ingredient = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 5)
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  constructor() {
  }

  getIngredients() {
    return this.ingredient.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredient.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }
}


