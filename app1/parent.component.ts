import {Component, OnInit, OnDestroy} from '@angular/core';


@Component(
    {
        selector: 'app-root',
        template:
        `
        <h2>Life cycle hook</h2>
        <button (click)="toggle()">Hide/Show Child Component</button>
        <child-component *ngIf="displayChild"></child-component>
        `
    }
)

export class ParentComponent implements OnInit, OnDestroy{
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
