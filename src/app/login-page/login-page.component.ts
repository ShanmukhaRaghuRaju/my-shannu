import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  isVisible:Boolean=false;
  visible(){
    this.isVisible=!this.isVisible
  }
  

}
