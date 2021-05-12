import { Component } from "@angular/core";

//decorator (thr @)
//the decorator says "whatever is written below me is a component"
//tells app to use it
//deco also adds metadata to component
@Component({
    selector: "app-click-me",
    template:`
    <p> The hero's birthday is {{birthday|date:format}}</p>
    <p> The uppercase name is {{clickmessage | uppercase | titlecase}}</p>
    <button (click)="toggleFormat()"> ToggleFormat </button>
    `
})

export class ClickMeComponent{
    //inbuilt calendar starts from 0
    //therefore, will show 4 on UI
    birthday=new Date(1984,3,15); 
    toggle=true;
    clickmessage="hi hello";
    get format()
    {
        return this.toggle?'shortDate':'fullDate';
    }
    toggleFormat()
    {
        this.toggle=!this.toggle;
    }
}
    
    
    /*
    //old template and class
    `

    <style>
    button {
        background-color: #ffeeff;
        border: 1px solid #777;
    }
    </style>

    <h1> Please click here </h1>
    <button (click) = "onClickMe()"> Click me! </button>
    {{ clickMessage }}`,


    //styles:['h1{font-weight:normal;}','h1{background-color"#ffeeff;}'],
    
    //create a css file, and include like this as metadata
    //styleUrls: ['./sneha.component.css']
    
})
export class ClickMeComponent{
    clickMessage="";
    onClickMe()
    {
        this.clickMessage="welcome to pesu";
    }
}
*/