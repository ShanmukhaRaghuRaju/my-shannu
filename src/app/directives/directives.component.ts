import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  states:string[]=["ap","ts","kel","mum","kin"]


products:any[]=[
  {name:"tv",price:15000,rating:1.5},
  {name:"remote",price:1500,rating:3.5},
  {name:"fridge",price:10000,rating:2.5},
  {name:"ac",price:20000,rating:3},
  {name:"fan",price:7500,rating:2},
  {name:"car",price:500,rating:2.5},
  {name:"bike",price:150000,rating:5},
]
date:any=new Date();
}