import {Component, OnInit, OnDestroy} from '@angular/core';


@Component(
    {
        selector: 'child-component',
        template:
        `
        <h2>Child Component</h2>
        `
    }
)

export class ChildComponent implements OnInit, OnDestroy{
    
    constructor()
    {
        console.log("ChildComponent: Constructor");
    }



    ngOnInit()
    {
        console.log("ChildComponent: OnInit");
    }

    ngOnDestroy()
    {
        console.log("ChildComponent: OnDestroy");
    }



}
