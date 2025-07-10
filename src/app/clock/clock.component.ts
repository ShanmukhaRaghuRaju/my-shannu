import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  user:User={
    name:'shannu',
    mobile:98868449,
    email:'shanu@gamil.com',
    age:25
  }

}
