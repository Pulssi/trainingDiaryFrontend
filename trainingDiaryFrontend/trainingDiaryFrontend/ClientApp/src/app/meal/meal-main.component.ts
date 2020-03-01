import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/person/person.service'
import { Meal } from '../models/meal';
import { MealService } from './meal.service';

@Component({
  selector: 'meal-main',
  templateUrl: './meal-main.component.html',
})
export class MealComponent implements OnInit {
  meals: Meal[];

  constructor(private mealService: MealService) {
  }

  ngOnInit() {
    this.mealService.getMeals$(1).subscribe(result => {
      console.log(result);
      this.meals = result;
    });
  }
}
