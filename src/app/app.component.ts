import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [RecipeService]
})
export class AppComponent {
  menu:string = "Recipes";

  constructor (private recipeService: RecipeService) {}

  onMenuSelected(selectedMenu: string) {
    this.menu = selectedMenu;
  }
}
