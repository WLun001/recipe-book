import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe 1', 'test description 1', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg'),
    new Recipe('Test recipe 2', 'test description 2', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg'),
    new Recipe('Test recipe 3', 'test description 3', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg'),
    new Recipe('Test recipe 4', 'test description 4', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg')
  ];

  @Output() receivedRecipe = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onReceivedRecipe(recipe: Recipe) {
    this.receivedRecipe.emit(recipe);
  }

}
