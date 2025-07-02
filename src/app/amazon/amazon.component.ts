import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
  amazons:any[]=[]

  constructor(private _amazonService:AmazonService){
    _amazonService.getProducts().subscribe(
      (data:any)=>{
        this.amazons=data
        console.log(data);
      },(err:any)=>{
        alert("internal server error");
      }
    )
  }
  }
  

