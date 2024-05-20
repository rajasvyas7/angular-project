import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy{
  recipes: Recipe[];
  rcSubscription: Subscription;

  // @Output() onRecipeDetails = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.rcSubscription = this.recipeService.recipesChanged.subscribe(
      (rcps: Recipe[]) => {
        this.recipes = rcps;
      }
    );
   this.recipes = this.recipeService.getRecipes(); 
  }

  ngOnDestroy(): void {
    this.rcSubscription.unsubscribe();
  }
  // showRecipeDetails(selectedRecipe: Recipe) {
  //   // console.log('recipe-list rIndex', rIndex, this.recipes[rIndex]);
  //   // this.onRecipeDetails.emit(this.recipes[rIndex]);
  //   this.onRecipeDetails.emit(selectedRecipe);
  // }
}
