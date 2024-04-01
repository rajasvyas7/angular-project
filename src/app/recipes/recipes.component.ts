import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent {
  recipeContent: Recipe;
  /**don;t need the following function in the actula solution as the assigning part is handled at the html template itself */
  // renderRecipeDetails(recipe: Recipe) {
  //   // console.log('recipes :', recipe);
  //   this.recipeContent = recipe;  
  // }
}
