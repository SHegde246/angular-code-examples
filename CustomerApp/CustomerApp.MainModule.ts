import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CustomerComponent} from './Customer/CustomerApp.CustomerComponent';
import {HomeComponent} from './Home/CustomerApp.HomeComponent';
import {SupplierComponent} from './Supplier/CustomerApp.SupplierComponent';
import{MasterPageComponent} from './Home/CustomerApp.MasterPageComponent';
import {MainRoutes} from './Routing/CustomerApp.MainRouting'

@NgModule({
    declarations:[
        CustomerComponent,
        HomeComponent,
        SupplierComponent,
        MasterPageComponent
    ],

    imports:[
        RouterModule.forRoot(MainRoutes),
        BrowserModule,
        FormsModule
    ],
    providers:[],
    bootstrap:[MasterPageComponent]
})

export class CustomerModule{}