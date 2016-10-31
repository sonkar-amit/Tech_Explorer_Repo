import { Component,OnInit } from '@angular/core';
import {ZigweService} from './zigwe.service';
import {ActivatedRoute, Params , Router }    from '@angular/router';
import {NavigationComponent} from './navigation.component';
import {Food} from './Food';

@Component({
  selector: 'eatery-app',
  templateUrl:'public/html/eatery.component.html',
  styleUrls:['public/css/eatery.component.css'],
  providers:[
    ZigweService
  ]
})
export class EateryComponent implements OnInit{
  foods:Food[];
  foodCarts:Food[];
  totalAmount:number;
  constructor(private zigweService:ZigweService, 
              private router: Router,
              private route: ActivatedRoute
              ) { }
  addFoodToCart(food):void{
    food.qty += 1;
    if(!this.foodCarts){
      this.foodCarts = [];
    }
    this.foodCarts.push(food);
    this.calculateTotalAmount();
  }
  removeFoodFromCart(food):void{
    food.qty = 0;
    let index = this.foodCarts.indexOf(food);
    this.foodCarts.splice(index,1);
    this.calculateTotalAmount();
  }
  decreaseQty(food):void{
    food.qty -= 1;
    if(food.qty == 0){
      this.removeFoodFromCart(food);
    }
    this.calculateTotalAmount();
  }
  increaseQty(food):void{
    food.qty += 1;
    this.calculateTotalAmount();
  }
  ngOnInit():void{
    this.zigweService.getFoodItems(null,null).then(
      foods =>this.foods = foods
    );
  }
  getFoodCart(key:number):Food{
    let food:Food;
    for(var i=0;i<this.foodCarts.length;i++){
      if(this.foodCarts[i].id == key){
        food = this.foodCarts[i];
      }
    }
    return food;
  }
  calculateTotalAmount():void{
    let total = 0;
    for(var i=0;i<this.foodCarts.length;i++){
      total += (this.foodCarts[i].price * this.foodCarts[i].qty);
    }
    this.totalAmount = total;
  }
  search(term: string): void {
    this.zigweService.getFoodItems(null,null).then(
      foods =>this.foods = foods
    );
  }
}