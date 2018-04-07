import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Recipe} from './../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();
	recipes: Recipe[] = [
		new Recipe('A test Recipe', 
				'This is simply a test', 
				'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
		new Recipe('Second test Recipe', 
				'This is simply a test', 
				'https://get.pxhere.com/photo/dish-food-recipe-snack-fast-food-cuisine-sandwich-vegetarian-food-baked-goods-power-supply-junk-food-beirut-mediterranean-food-finger-food-european-food-breakfast-sandwich-american-food-1375814.jpg')
	];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
  	this.recipeWasSelected.emit(recipe);
  }

}