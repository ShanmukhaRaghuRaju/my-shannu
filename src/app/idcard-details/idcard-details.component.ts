import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdcardService } from '../idcard.service';

@Component({
  selector: 'app-idcard-details',
  templateUrl: './idcard-details.component.html',
  styleUrls: ['./idcard-details.component.css']
})

export class IdcardDetailsComponent {
  id:number=0;
  studentdetails:any={};
  constructor(private _activatedROute:ActivatedRoute, private _Idcardservice:IdcardService){
    _activatedROute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      },(err:any)=>{
        console.log("unable to get id");
      }
    )
    _Idcardservice.getidcard(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.studentdetails=data;
        
      },(err:any)=>{
        alert("Internal server Error")
      }
    )

  }

}
