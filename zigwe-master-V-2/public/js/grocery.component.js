"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var zigwe_service_1 = require('./zigwe.service');
var router_1 = require('@angular/router');
var GroceryComponent = (function () {
    function GroceryComponent(zigweService, router, route) {
        this.zigweService = zigweService;
        this.router = router;
        this.route = route;
    }
    GroceryComponent.prototype.addFoodToCart = function (food) {
        food.qty += 1;
        if (!this.foodCarts) {
            this.foodCarts = [];
        }
        this.foodCarts.push(food);
        this.calculateTotalAmount();
    };
    GroceryComponent.prototype.removeFoodFromCart = function (food) {
        food.qty = 0;
        var index = this.foodCarts.indexOf(food);
        this.foodCarts.splice(index, 1);
        this.calculateTotalAmount();
    };
    GroceryComponent.prototype.decreaseQty = function (food) {
        food.qty -= 1;
        if (food.qty == 0) {
            this.removeFoodFromCart(food);
        }
        this.calculateTotalAmount();
    };
    GroceryComponent.prototype.increaseQty = function (food) {
        food.qty += 1;
        this.calculateTotalAmount();
    };
    GroceryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zigweService.getFoodItems(null, null).then(function (foods) { return _this.foods = foods; });
    };
    GroceryComponent.prototype.getFoodCart = function (key) {
        var food;
        for (var i = 0; i < this.foodCarts.length; i++) {
            if (this.foodCarts[i].id == key) {
                food = this.foodCarts[i];
            }
        }
        return food;
    };
    GroceryComponent.prototype.calculateTotalAmount = function () {
        var total = 0;
        for (var i = 0; i < this.foodCarts.length; i++) {
            total += (this.foodCarts[i].price * this.foodCarts[i].qty);
        }
        this.totalAmount = total;
    };
    GroceryComponent.prototype.search = function (term) {
        var _this = this;
        this.zigweService.getFoodItems(null, null).then(function (foods) { return _this.foods = foods; });
    };
    GroceryComponent = __decorate([
        core_1.Component({
            selector: 'grocery-app',
            templateUrl: 'public/html/grocery.component.html',
            styleUrls: ['public/css/eatery.component.css'],
            providers: [
                zigwe_service_1.ZigweService
            ]
        }), 
        __metadata('design:paramtypes', [zigwe_service_1.ZigweService, router_1.Router, router_1.ActivatedRoute])
    ], GroceryComponent);
    return GroceryComponent;
}());
exports.GroceryComponent = GroceryComponent;
//# sourceMappingURL=grocery.component.js.map