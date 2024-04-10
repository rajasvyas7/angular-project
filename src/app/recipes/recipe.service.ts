import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Puran Poli', 
      "Maharashtrian dish", 
      "https://foodtrails25.com/wp-content/uploads/2023/09/Puran-Poli-Recipe.jpg",
      [
        new Ingredient('Tuar daal', 0.350),
        new Ingredient('Flour', 0.450),
        new Ingredient('Jaggery', 0.5)
      ]
    ),
    new Recipe(
      'Amrakhanda', 
      "Delicous dessert made from mango pulp & curd", 
      "https://www.nestleprofessional.in/sites/default/files/2021-08/Amrakhand.jpg",
      [
        new Ingredient('Curd', 0.500),
        new Ingredient('Mango pulp', 2)
      ]
    )
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  getRecipes () {
    /**
     * Returing only this recipe will return the reference of the array
     * this.recipes.slice() will return a new array which will be copy & not reference of the recipes array
     */
    return this.recipes.slice();
  } 

  getRecipeById(id: number) {
    let recipes = this.getRecipes();
    // console.log('grbi', recipes);
    
    return recipes[id];
  }

}