import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
[x: string]: any;
  isDisabled: boolean = true;
  buttonactive:boolean=true;
  val(d:any){
   
    console.log(d.value)
   }


   Name:string="raju"
  //  keyfilter(name:any){
  //  this.Name=name.value;
  //  console.log(this.Name);

  islogin:boolean=false;
  isadmin:boolean=true;
  isuser:boolean=true;
num:number=0
login(){
  this.num++
  console.log(this.num)
  

}


   }
   
  // }



