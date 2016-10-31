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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ZigweService = (function () {
    function ZigweService(http) {
        this.http = http;
    }
    ZigweService.prototype.getFoodItems = function (category, term) {
        var params = 'category=' + category;
        if (term && term.length > 0) {
            params += '&term=' + term;
        }
        return this.http.get('api/foods?' + params).toPromise().then(function (response) { return response.json(); }).catch(this.handleError);
    };
    ZigweService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ZigweService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ZigweService);
    return ZigweService;
}());
exports.ZigweService = ZigweService;
//# sourceMappingURL=zigwe.service.js.map