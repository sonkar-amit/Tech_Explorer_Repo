"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var eatery_component_1 = require('./eatery.component');
var grocery_component_1 = require('./grocery.component');
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'eatery',
        component: eatery_component_1.EateryComponent
    },
    {
        path: '',
        redirectTo: '/eatery',
        pathMatch: 'full'
    },
    {
        path: 'grocery',
        component: grocery_component_1.GroceryComponent
    },
    {
        path: '',
        redirectTo: '/grocery',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map