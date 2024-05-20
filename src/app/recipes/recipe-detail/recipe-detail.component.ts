import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  recipeId: number;

  constructor(
    private recipeService: RecipeService,
    private shoppinListService: ShoppingListService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];   //the id should not be local but class variable
        this.recipeDetail = this.recipeService.getRecipeById(this.recipeId);
      }
    );
  }

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

  deleteRecipeItem(id: number) {
    // console.log('delete recipe id', id)
    this.recipeService.deleteRecipe(id);
    this.router.navigate(['/recipes']);
  }
}
