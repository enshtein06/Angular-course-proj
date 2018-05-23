import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import {Recipe} from './../shared/recipe.model';
import {Ingredient} from './../shared/ingredient.model';
import {ShoppingListService} from './shoppinglist.service';

@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();
	private recipes: Recipe[] = [
		new Recipe('A test Recipe', 
				'This is simply a test', 
				'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
				[
					new Ingredient('Meat', 1),
					new Ingredient('French Fries', 20)
				]),
		new Recipe('Second test Recipe', 
				'This is simply a test', 
				'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
				[
					new Ingredient('Buns', 2),
					new Ingredient('Meat', 1)
				])
	];

	constructor(private slService: ShoppingListService){}

	getRecipes() {
		return this.recipes.slice(); //via slice we get a copy of recipes not an original object
	}

	addIngridientToShoppingList(ingridients: Ingredient[]) {
		this.slService.addIngredients(ingridients);
	}

	getRecipe(id: number) {
		return this.recipes[id];
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}
	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}
	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}