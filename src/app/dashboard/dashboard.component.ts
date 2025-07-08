import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private _router:Router){}
  logout(){
    if (confirm("Are you want to logout")==true) {
      sessionStorage.removeItem('token');
    this._router.navigateByUrl("/")
      
    } else {
      alert("thank you 😊 unable to logout ")
      
    }
    

  }

}
