import {LoginService} from '../../services/login/login.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) {
  }


  login() {
    this.loginService.logIn();
  }

}
