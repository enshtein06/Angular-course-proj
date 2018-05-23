import { Component, OnInit, Input} from '@angular/core';

import {RecipeService} from './../../../services/recipe.service';
import {Recipe} from './../../../shared/recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
	@Input() recipe;
	@Input() index: number;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

}
