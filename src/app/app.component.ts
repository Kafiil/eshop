import {UserService} from './services/user/user.service';
import {Router} from '@angular/router';
import {LoginService} from './services/login/login.service';
import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: LoginService, router: Router) {
    auth.user$.subscribe((user: firebase.User) => {
      if (user) {
        this.userService.save(user);
        const returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
