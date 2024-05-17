import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        // console.log('params', params);
        // console.log('id', params['id'], params['id'] == null, typeof params['id'] === 'undefined');
        this.recipeId = params['id'];
        this.editMode = typeof params['id'] !== 'undefined';
        console.log('editMode', this.editMode, this.recipeId);
        this.initForm();
      }
    );
    
  }

  private initForm() {
    let name, imageUrl, description = null;
    let ingredients = new FormArray([]);
    if (this.editMode) {
      const editableRecipe = this.recipeService.getRecipeById(this.recipeId)
      console.log('editable Recipe', editableRecipe);
      name = editableRecipe.name;
      description = editableRecipe.description;
      imageUrl = editableRecipe.imageUrl;
      if (editableRecipe['ingredients']) {
        for (let ingr of editableRecipe.ingredients) {
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingr.name),
              'amount': new FormControl(ingr.amount)
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name),
      'description': new FormControl(description),
      'imageUrl': new FormControl(imageUrl),
      'ingredients': ingredients
    });
  }

  getIngredientsFC() {
    // const elmHobby = new FormControl(null);
    // (<FormArray>this.signupForm.get('hobbies')).push(elmHobby);
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onRecipeSubmit() {
    console.log(this.recipeForm);
  }

  addIngredientFC() {
    const elmIngredient = new FormGroup({
      'name': new FormControl(null),
      'amount': new FormControl(null)
    });
    (<FormArray>this.recipeForm.get('ingredients')).push(elmIngredient);
  }

}
