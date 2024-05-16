import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  // @ViewChild('inputName') ipName: ElementRef;
  // @ViewChild('inputAmount') ipAmount: ElementRef; 
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('ingFrm') ingredientForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}


  onAddIngredient() { // one can also pass form instance ingForm to the function
    // console.log(this.ingredientForm);
    
    const name = this.ingredientForm.value.name;
    const amnt = this.ingredientForm.value.amount;
    const ingredient = new Ingredient(name, amnt);
    // this.ingredientAdded.emit(ingredient);
    this.shoppingListService.addIngredient(ingredient);
    this.resetIngredientFrom();
  }

  resetIngredientFrom() {
    this.ingredientForm.reset({});
  }

}
