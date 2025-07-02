import { Component } from '@angular/core';
import { EmailsService } from '../emails.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent {
  emails:any[]=[]
  constructor(private _emailsservice:EmailsService){
    _emailsservice.getmsg().subscribe(
      (data:any)=>{
        console.log(data)
        this.emails=data;
      }
    )

    
  }
  

     
  

}
