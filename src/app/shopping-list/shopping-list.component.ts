import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]= [
    new Ingredient('Mangoes', 5),
    new Ingredient('Curd', 1), 
    new Ingredient('Wheat flour', 1),
    new Ingredient('Jaggery', 0.5)
  ];

  constructor() { }
  ngOnInit() { }

  onIngredientAdded(ing: Ingredient) {
    this.ingredients.push(ing);
  }
}
