import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('inputName') ipName: ElementRef;
  @ViewChild('inputAmount') ipAmount: ElementRef; 

  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  onAddIngredient() {
    const name = this.ipName.nativeElement.value;
    const amnt = this.ipAmount.nativeElement.value;
    const ingredient = new Ingredient(name, amnt);
    this.ingredientAdded.emit(ingredient);
  }

}
