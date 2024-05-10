// import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    private ingredients: Ingredient[]= [
        new Ingredient('Mangoes', 5),
        new Ingredient('Curd', 1), 
        new Ingredient('Wheat flour', 1),
        new Ingredient('Jaggery', 0.5)
    ];

    ingredientsChanged = new Subject<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingrdnt: Ingredient) {
        // const ingrdnt = new Ingredient(name, qty);
        this.ingredients.push(ingrdnt);
        this.ingredientsChanged.next(this.getIngredients());
    }

    addMultipleIngredients (ingrdnts: Ingredient[]) {
        this.ingredients.push(...ingrdnts);
        this.ingredientsChanged.next(this.getIngredients());
    }
}