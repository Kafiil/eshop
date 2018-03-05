import { AngularFireAuth } from 'angularfire2/auth';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user$: Observable<firebase.User>;

  constructor(private loginService: LoginService) {
    this.user$ = loginService.user$;

  }

  toggleNavigation() {
    console.log('Should toggle naviation ');
  }

  logout() {
    this.loginService.logOut();
  }


}
