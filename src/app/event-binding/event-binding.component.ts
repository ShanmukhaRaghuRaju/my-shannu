import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  click(){
    alert("welcome")
  }
  name(){
    alert("good one")
  }
  change(){
    alert("it is a good country")
  }
  username:string="shannu";
  age:number=25;

 datapresent:boolean=true;
  mobile:string="+91"

  nqme(){
    console.log(this.mobile)
  }

  num1:number=0;
  num2:number=0;
  result:number=0;

  add(){
    this.result=this.num1+this.num2

  }
  sub(){
    this.result=this.num1-this.num2

  }
  mul(){
    this.result=this.num1*this.num2

  }
  div(){
    this.result=this.num1/this.num2

  }
  





  

  
}


  


