import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(params['id']);
      this.editMode = params['id'] !== undefined;
      console.log(this.editMode);
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  private initForm() {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeDescription = '';
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImageUrl = recipe.imagePath;
      recipeDescription = recipe.description;
    }
    this.form = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imageUrl: new FormControl(recipeImageUrl, Validators.required),
      description: new FormControl(recipeDescription)
    });
  }

}
