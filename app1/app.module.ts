import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';

import {ClickMeComponent } from './clickme.component';
//import {LoopBackComponent } from './loopback.component';
import {ItemInput} from './loopback.component';


import {LittleTourComponent } from './little-tour.component';

import {ItemOutput} from './Itemoutput.component';


import {ParentComponent} from './parent.component';
import {ChildComponent} from './child.component';



@NgModule({
  declarations: [
    //AppComponent,
    //ClickMeComponent,
    //LoopBackComponent,
    //ItemInput,
    //LittleTourComponent,
    //ItemOutput,

    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }
