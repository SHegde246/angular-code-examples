/*

//for working with structural directives

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Top 5 movies list";
  movies: Movie[] =[

    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},
    {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
    {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016'},
  ]
  


  showMe: Boolean = true;


  num: string="4";
  

}

class Movie
{
  title: string;
  director: string;
  cast: string;
  releaseDate: string;
}
*/
//*****************************************

//for working with attribute directives


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],

  template:
  `
  <!--without using ngModel-->
  <div style="text-align:center">
  <h2> Attribute Directives </h2>
  <h3>Does not use ngModel</h3>
  <input type="text" [value]="name" (input)="name=$event.target.value">
  <p>You have entered a value: {{name}} </p>
  <button (click) ="clearName()">Clear</button>

  <p>---------------------------------------------</p>

  <!--using ngModel-->
  <h3>Uses ngModel</h3>
  <input type="text" [(ngModel)] = "value">
  <p>You have entered a value: {{value}} </p>
  <button (click) ="clearValue()">Clear</button>

  <p>---------------------------------------------</p>
  
  <!--using ngStyle-->
  <p [ngStyle]="{'font-size.px' : size, 'color' : 'blue'}"> This has been styled </p>

  <p>-------------</p>

  <!--using ngStyle-->
  <p [ngClass] = "'red size40'"> This is styled by ngClass String </p>
  <p [ngClass] = "['red', 'size40']"> This is styled by ngClass Array </p>
  <p [ngClass] = "arr"> This is styled by ngClass Variable </p>

  <p>---------------------------------------------</p>

  <!--using ngStyle-->
  <button (click) = "toggle()"> Toggle colours </button>
  <h2 [ngClass] = "condition? 'red':'blue'"> This is styled by ngClass Expression </h2>

  <p>---------------------------------------------</p>

  <!--ngIf with ngModel-->
  <h3> ngIf with ngModel </h3>
  Show <input type="checkbox" [(ngModel)] = "check"/>
  <p *ngIf = "check">
    Checkbox is checked
  </p>
  <p *ngIf = "!check">
    Checkbox is unchecked
  </p>
  `
  
})

export class AppComponent
{
  condition: Boolean = true;
  name="";
  value: string ="";
  check: Boolean = true;
  size=30;
  arr=['red','size40'];

  toggle()
  {
    this.condition=!this.condition;
  }

  clearName()
  {
    this.name="";
  }

  clearValue()
  {
    this.value="";
  }
}