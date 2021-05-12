
/*
//TEMPLATE DRIVEN FORM
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Template Driven Forms';


  countryList : country[] =
  [
    new country("1","India"),
    new country("2","Russia"),
    new country("1","US")
  ];


  //property : class
  contact : contact;

  //as soon as it inits, fill default val for the fields
  ngOnInit()
  {
    this.contact={
      firstname : "sneha",
      lastname : "hegde",
      email : "sh@gmail.com",
      gender : "female",
      isMarried : false,
      country : "1",
      address : {city:"Bangalore", street:"pes road", pincode:"560085"}
    };
  }


  onSubmit(contactForm)
  {
    console.log(contactForm.value);
  }

  setDefaults()
  {
    this.contact=
    {
      firstname : "sneha",
      lastname : "hegde",
      email : "sh@gmail.com",
      gender : "female",
      isMarried : false,
      country : "1",
      address : {city:"Bangalore", street:"pes road", pincode:"560085"}
    };
  }

  changeCountry()
  {
    this.contact.country="3";
  }

  reset(contactForm:NgForm)
  {
    contactForm.resetForm();
  }

}


export class contact
{
  firstname : string;
  lastname : string;
  email : string;
  gender : string;
  isMarried : boolean;
  country : string;
  address :
  {
    city : string;
    street : string;
    pincode : string;
  }
}

export class country
{
  id : string;
  name : string;
  constructor(id:string,name:string)
  {
    this.id=id;
    this.name=name;
  }
}
*/

//********************************************

//MODEL DRIVEN FORM
import {Component} from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template:
  `
  <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
  
  <p>
  <label for="firstname">FirstName</label>
  <input type="text" id="firstname" name="firstname" formControlName="firstname">
  </p>

  <p>
  <label for="lastname">LastName</label>
  <input type="text" id="lastname" name="lastname" formControlName="lastname">
  </p>

  <p>
  <label for="email">Email</label>
  <input type="text" id="email" name="email" formControlName="email">
  </p>

  <p>
  <label for="gender">Gender</label>
  <input type="radio" value="female" id="gender" name="gender" formControlName="gender">Female
  <input type="radio" value="male" id="gender" name="gender" formControlName="gender">Male
  </p>

  <p>
  <label for="country">Country</label>
  <select id="country" name="country" formControlName="country">
    <option [ngValue]="c.id" *ngFor="let c of countryList">
      {{c.name}}
    </option>
  </select>
  </p>

  <p>
  <button type="submit">Submit</button>
  </p>

  </form>
  `
})
export class AppComponent
{
  contactForm=new FormGroup
                  ({
                    firstname: new FormControl(),
                    lastname: new FormControl(),
                    email: new FormControl(),
                    gender: new FormControl(),
                    isMarried: new FormControl(),
                    country: new FormControl(),
                  });


  countryList : country[] =
  [
    new country("1","India"),
    new country("2","Russia"),
    new country("3","US")
  ];

  onSubmit()
  {
    console.log(this.contactForm.value);
  }

}

export class country
{
  id : string;
  name : string;
  constructor(id:string,name:string)
  {
    this.id=id;
    this.name=name;
  }
}

