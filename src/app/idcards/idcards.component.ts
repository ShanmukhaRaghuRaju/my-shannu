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

}
