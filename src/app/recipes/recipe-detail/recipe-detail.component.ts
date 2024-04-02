import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from  '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() recipeDetail: Recipe;

  constructor(private shoppinListService: ShoppingListService) {}

  sendToSL(ingredients: Ingredient[]) {
    /**
     * The following for each will call shoppingListService.addIngredient multiple times, 
     * which will eventuallyt emit ingredientsChanged event multiple times  
     * To avoid this using spread operator (ES6 feature) at the shoppingListService
     */
    // ingredients.forEach(element => {
    //   console.log('send to SL '+element);
    //   this.shoppinListService.addIngredient(element);
    // });
    this.shoppinListService.addMultipleIngredients(ingredients);
  }
}
