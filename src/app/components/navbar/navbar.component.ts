import {LoginService} from '../../services/login/login.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public auth: LoginService) {
  }

  logout() {
    this.auth.logOut();
  }
}
