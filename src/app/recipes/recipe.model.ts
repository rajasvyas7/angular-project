import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    // public id: number
    public name: string;
    public description: string;
    public imageUrl: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imgUrl: string, ingrdnts: Ingredient[]=[]) {
        this.name = name;
        this.description =  desc;
        this.imageUrl = imgUrl;
        this.ingredients = ingrdnts;
        // this.id = this.getId();
        // console.log(this.name, this.id);
    }

    private getId () {
        let id = performance.now().toString().replace('.', '');
        return +id;
    }
}