
/*
import { Component } from '@angular/core';

//parent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'CustomerApplication';
  //currentItem="Television"; //for @Input

  //for @Output
  avengers=["Black Widow","Iron Man","Captain America"];
  currentAvenger=this.avengers[1];

  addItem(newAvenger:string)
  {
    this.avengers.push(newAvenger);
  }
}
*/


/*
import {Component, OnInit, OnDestroy} from '@angular/core';


@Component(
    {
        selector: 'parent-component',
        template:
        `
        <h2>Life cycle hook</h2>
        <button (click)="toggle()">Hide/Show Child Component</button>
        <child-component *ngIf="displayChild"></child-component>
        `
    }
)

export class AppComponent implements OnInit, OnDestroy{
    displayChild=true;
    constructor()
    {
        console.log("ParentComponent: Constructor");
    }


    toggle()  //toggle bw creating and destroying child component
    {
        this.displayChild=!this.displayChild;
    }



    ngOnInit()
    {
        console.log("ParentComponent: OnInit");
    }

    ngOnDestroy()
    {
        console.log("ParentComponent: OnDestroy");
    }



}
*/
