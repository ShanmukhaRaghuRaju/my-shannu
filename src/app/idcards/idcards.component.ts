import { Component } from '@angular/core';
import { IdcardService } from '../idcard.service';

@Component({
  selector: 'app-idcards',
  templateUrl: './idcards.component.html',
  styleUrls: ['./idcards.component.css']
})
export class IdcardsComponent {

  
  students: any;
  constructor(private  _idcardService:IdcardService){
    this._idcardService.getidcards().subscribe(
      (data:any)=>{
        console.log(data)
        this.students=data;
      }
    )
  }
  term:string='';
  search(){
    this._idcardService.getfilteridcards(this.term).subscribe(
      (data:any)=>{
        console.log(data)
        this.students=data; 
      }
    )
    
    

  }
  column:string='';
  order:string='';
  sort(){
    if (!this.column || !this.order) return;
    console.log(this.column,this.order);
    this._idcardService.getsortedidcards(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.students=data
      }
    )
  }

}
