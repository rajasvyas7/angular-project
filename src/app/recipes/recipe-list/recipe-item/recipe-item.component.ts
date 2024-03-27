import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  // @Input() recipeIndex: number;
  @Output() getRecipeDetails = new EventEmitter<void>();

  onRecipeClick() {
    // console.log('recipeItem ri:', ri);
    this.getRecipeDetails.emit();
  }
}
