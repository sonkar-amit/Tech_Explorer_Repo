import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home.component';
import { EateryComponent }   from './eatery.component';
import { GroceryComponent }   from './grocery.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
,
    {
        path: 'eatery',
        component: EateryComponent
    },
    {
        path: '',
        redirectTo: '/eatery',
        pathMatch: 'full'
    }
,
{
        path: 'grocery',
        component: GroceryComponent
    },
    {
        path: '',
        redirectTo: '/grocery',
        pathMatch: 'full'
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);