import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        // console.log('params', params);
        // console.log('id', params['id'], params['id'] == null, typeof params['id'] === 'undefined');
        this.recipeId = params['id'];
        this.editMode = typeof params['id'] !=='undefined';
         
        
      }
    );
  }



}
