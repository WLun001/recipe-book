import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onSubmit(form: NgForm) {
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, new Ingredient(form.value.name, form.value.amount));
    } else {
      this.shoppingListService.addIngredient(new Ingredient(form.value.name, form.value.amount));
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.form.reset();
    this.editMode = false;
  }

  onClearClicked() {
    this.form.reset();
    this.editMode = false;
  }

}
