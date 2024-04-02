import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  // = [
  //   new Ingredient('Mangoes', 5),
  //   new Ingredient('Curd', 1), 
  //   new Ingredient('Wheat flour', 1),
  //   new Ingredient('Jaggery', 0.5)
  // ];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() { 
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingdnts: Ingredient[]) => {
        this.ingredients = ingdnts;
      }
    );
  }

  // onIngredientAdded(ing: Ingredient) {
  //   this.ingredients.push(ing);
  // }
}
