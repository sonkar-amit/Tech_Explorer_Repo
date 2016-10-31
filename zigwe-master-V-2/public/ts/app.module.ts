import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';

import { routing }              from './app.routing';

import {ZigweService} from './zigwe.service';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
import {NavigationComponent} from './navigation.component'
import {CarouselComponent} from './carousel.component';
import { EateryComponent }   from './eatery.component';
import { GroceryComponent }   from './grocery.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    CarouselComponent, 
    EateryComponent,
    GroceryComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers:[
    ZigweService
  ]
})
export class AppModule { }