import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { GoogleAuthProvider } from '@firebase/auth-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }


  login() {
    this.loginService.logIn();
  }
  logout() {
    this.loginService.logOut();
  }
}
