import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() id: number;
  // @Output() getRecipeDetails = new EventEmitter<void>();

  // constructor(private recipeService: RecipeService) {}

  // onRecipeClick() {
  //   // console.log('recipeItem ri:', ri);
  //   // this.getRecipeDetails.emit();
  //   this.recipeService.selectedRecipe.emit(this.recipe);
  // }
}
