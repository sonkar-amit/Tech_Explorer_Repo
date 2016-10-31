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
var EateryComponent = (function () {
    function EateryComponent(zigweService, router, route) {
        this.zigweService = zigweService;
        this.router = router;
        this.route = route;
    }
    EateryComponent.prototype.addFoodToCart = function (food) {
        food.qty += 1;
        if (!this.foodCarts) {
            this.foodCarts = [];
        }
        this.foodCarts.push(food);
        this.calculateTotalAmount();
    };
    EateryComponent.prototype.removeFoodFromCart = function (food) {
        food.qty = 0;
        var index = this.foodCarts.indexOf(food);
        this.foodCarts.splice(index, 1);
        this.calculateTotalAmount();
    };
    EateryComponent.prototype.decreaseQty = function (food) {
        food.qty -= 1;
        if (food.qty == 0) {
            this.removeFoodFromCart(food);
        }
        this.calculateTotalAmount();
    };
    EateryComponent.prototype.increaseQty = function (food) {
        food.qty += 1;
        this.calculateTotalAmount();
    };
    EateryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zigweService.getFoodItems(null, null).then(function (foods) { return _this.foods = foods; });
    };
    EateryComponent.prototype.getFoodCart = function (key) {
        var food;
        for (var i = 0; i < this.foodCarts.length; i++) {
            if (this.foodCarts[i].id == key) {
                food = this.foodCarts[i];
            }
        }
        return food;
    };
    EateryComponent.prototype.calculateTotalAmount = function () {
        var total = 0;
        for (var i = 0; i < this.foodCarts.length; i++) {
            total += (this.foodCarts[i].price * this.foodCarts[i].qty);
        }
        this.totalAmount = total;
    };
    EateryComponent.prototype.search = function (term) {
        var _this = this;
        this.zigweService.getFoodItems(null, null).then(function (foods) { return _this.foods = foods; });
    };
    EateryComponent = __decorate([
        core_1.Component({
            selector: 'eatery-app',
            templateUrl: 'public/html/eatery.component.html',
            styleUrls: ['public/css/eatery.component.css'],
            providers: [
                zigwe_service_1.ZigweService
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof zigwe_service_1.ZigweService !== 'undefined' && zigwe_service_1.ZigweService) === 'function' && _a) || Object, router_1.Router, router_1.ActivatedRoute])
    ], EateryComponent);
    return EateryComponent;
    var _a;
}());
exports.EateryComponent = EateryComponent;
//# sourceMappingURL=eatery.component.js.map