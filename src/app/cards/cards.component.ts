import { Component } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  showAuthor: boolean = false;
  cards:any[]=[]

  constructor(private _cardservice:CardsService){
    _cardservice.getdiv().subscribe(
      (data:any)=>{
        this.cards=data;
        console.log(data)
      }
    )

  }
 



}
