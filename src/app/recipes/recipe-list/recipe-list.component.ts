import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[];

  // @Output() onRecipeDetails = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipesChanged.subscribe(
      (rcps: Recipe[]) => {
        this.recipes = rcps;
      }
    );
   this.recipes = this.recipeService.getRecipes(); 
  }
  // showRecipeDetails(selectedRecipe: Recipe) {
  //   // console.log('recipe-list rIndex', rIndex, this.recipes[rIndex]);
  //   // this.onRecipeDetails.emit(this.recipes[rIndex]);
  //   this.onRecipeDetails.emit(selectedRecipe);
  // }
}
