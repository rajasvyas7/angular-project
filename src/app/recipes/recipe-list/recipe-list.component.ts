import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('Puran Poli', "Maharashtrian dish", "https://foodtrails25.com/wp-content/uploads/2023/09/Puran-Poli-Recipe.jpg"),
    new Recipe('Amrakhanda', "Delicus dessert made from mango pulp & curd", "https://www.nestleprofessional.in/sites/default/files/2021-08/Amrakhand.jpg")
  ];

  ngOnInit() {
    
  }
}
