import { Recipe } from "./recipe.model";

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('Puran Poli', "Maharashtrian dish", "https://foodtrails25.com/wp-content/uploads/2023/09/Puran-Poli-Recipe.jpg"),
        new Recipe('Amrakhanda', "Delicous dessert made from mango pulp & curd", "https://www.nestleprofessional.in/sites/default/files/2021-08/Amrakhand.jpg")
      ];
}