import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Puran Poli', "Maharashtrian dish", "https://foodtrails25.com/wp-content/uploads/2023/09/Puran-Poli-Recipe.jpg"),
    new Recipe('Amrakhanda', "Delicous dessert made from mango pulp & curd", "https://www.nestleprofessional.in/sites/default/files/2021-08/Amrakhand.jpg")
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  getRecipes () {
    /**
     * Returing only this recipe will return the reference of the array
     * this.recipes.slice() will return a new array which will be copy & not reference of the recipes array
     */
    return this.recipes.slice();
  } 
}