import { Component, Input } from "@angular/core";
/*
import { Component } from "@angular/core";
@Component({  //decorator
    selector: "app-loop-back",
    template:`
    <input #box (keyup)="0">
    <p> {{ box.value }} </p>
    `
})
export class LoopBackComponent{}
*/

@Component({
    selector: 'app-item-input',
    template:`
    <p>
    Today's item is: {{item}} <!--whatever comes from parent-->
    </p>
    `
})

export class ItemInput{
    @Input () item: string;
}