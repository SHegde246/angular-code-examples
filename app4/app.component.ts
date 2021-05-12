import { Component } from '@angular/core';

import {ProductService} from './product.service';
import {Product} from './product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

/*
export class AppComponent {
  
  //invoke service here
  products:Product[];
  productService;
  constructor()
  {
    //tightly coupling instantiation of new product
    //not good idea
    this.productService=new ProductService();
  }

  getProducts()
  {
    this.products=this.productService.getProducts();
  }
 
}
*/




export class AppComponent {
  
  //invoke service here
  products:Product[];
  
  //instaed of instantiating, we just say we need the service
  constructor(private productService:ProductService)
  {
    
  }

  getProducts()
  {
    this.products=this.productService.getProducts();
  }
 
}
