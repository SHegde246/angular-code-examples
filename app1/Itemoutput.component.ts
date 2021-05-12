import {Component} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';


//added for lifecycle hook demo
import {OnInit, AfterContentChecked, AfterViewChecked,
        AfterViewInit, AfterContentInit, DoCheck,
        OnChanges, OnDestroy} 
    from '@angular/core';


//child
@Component(
    {
        selector: "app-item-output",
        template:
        `
        <p>Today's Avenger is {{Ave}} </p>
        <label> Add an Avenger: <input #newAvenger></label>

        <button (click) = "addNewAvenger(newAvenger.value); newAvenger.value=''">Add to parent</button>
        `
    }
)

export class ItemOutput
{
    @Input() Ave:string;
    @Output() newItemEvent=new EventEmitter<string>();

    addNewAvenger(value:string)
    {
        if(value)
        {
            this.newItemEvent.emit(value);
        }
    }


    //added for lifecycle hook demo
    //handling the lh methods below

    ngOnChanges()
    {
        console.log("Child: Something has changed");
    }

    ngOnInit()
    {
        console.log("Child: On Init");
    }

    ngDoCheck()
    {
        console.log("Child: Do Check");
    }

    ngAfterContentInit()
    {
        console.log("Child: After Content Checked");
    }

    ngAfterViewInit()
    {
        console.log("Child: After View Init");
    }

    ngAfterViewChecked()
    {
        console.log("Child: After View Checked");
    }







}