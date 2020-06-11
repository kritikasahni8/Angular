import { Injectable } from '@angular/core'; //allows us to defibe injectable decorator as a class  
import {Dish } from '../shared/dish';
import {DISHES} from '../shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): Dish[]{   //return dish constant that we have imported dish services is now config to supply dishes js obj array to any ither part of application 
    return DISHES;
  }
}
