import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('inputName') ipName: ElementRef;
  // @ViewChild('inputAmount') ipAmount: ElementRef; 
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('ingFrm') ingredientForm: NgForm;
  editorSubscription: Subscription;
  editMode: boolean = false;
  editId: number = null;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.editorSubscription = this.shoppingListService.editingStarted.subscribe(
      (id: number) => {
        this.editMode = true;
        this.editId = id;
        const ingredient = this.shoppingListService.getIngredientById(id);
        // console.log('edir ingredient', ingredient);
        this.ingredientForm.setValue({
          name: ingredient.name,
          amount: ingredient.amount
        })
      }
    );
  }

  ngOnDestroy(): void {
    this.editorSubscription.unsubscribe();
  }

  onSaveIngredient() { // one can also pass form instance ingForm to the function
    // console.log(this.ingredientForm);

    const name = this.ingredientForm.value.name;
    const amnt = this.ingredientForm.value.amount;
    const ingredient = new Ingredient(name, amnt);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editId, ingredient);
    }
    else {
      // this.ingredientAdded.emit(ingredient);
      this.shoppingListService.addIngredient(ingredient);
    }

    this.resetIngredientFrom();
  }

  resetIngredientFrom() {
    this.ingredientForm.reset({});
    this.editMode = false;
    this.editId = null
  }

  deleteIngredient() {
    if (this.editId !== null && confirm("Are you sure you want to delete the ingredient? This can't be undone.")) {
      this.shoppingListService.deleteIngredient(this.editId);
      this.resetIngredientFrom();
    }
  }

}
