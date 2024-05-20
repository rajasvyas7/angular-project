import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipeService: RecipeService,
    private router: Router
  ) { }

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
      // console.log('editable Recipe', editableRecipe);
      name = editableRecipe.name;
      description = editableRecipe.description;
      imageUrl = editableRecipe.imageUrl;
      if (editableRecipe['ingredients']) {
        for (let ingr of editableRecipe.ingredients) {
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingr.name, Validators.required),
              'amount': new FormControl(ingr.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'description': new FormControl(description, Validators.required),
      'imageUrl': new FormControl(imageUrl, Validators.required),
      'ingredients': ingredients
    });
  }

  getIngredientsFC() {
    // const elmHobby = new FormControl(null);
    // (<FormArray>this.signupForm.get('hobbies')).push(elmHobby);
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onRecipeSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.get('name').value,
      this.recipeForm.get('description').value,
      this.recipeForm.get('imageUrl').value,
      this.recipeForm.get('ingredients').value
    );
    // console.log('form',this.recipeForm);
    // console.log('new Recipe', newRecipe);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipeId, newRecipe);  // option 1 
    }
    else {
      this.recipeId = this.recipeService.addRecipe(this.recipeForm.value); // option 2 recommended as the model & form names are same
    }
    this.router.navigate([`recipes`, this.recipeId])
  }

  addIngredientFC() {
    const elmIngredient = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
    (<FormArray>this.recipeForm.get('ingredients')).push(elmIngredient);
  }

  removeIngredient(ingrId) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(ingrId);
  }

}
