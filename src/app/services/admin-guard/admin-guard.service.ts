import { AppUser } from './../../models/AppUser';
import { LoginService } from './../login/login.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private loginService: LoginService) { }
  canActivate(): Observable<boolean> {
    return this.loginService.user$
      .switchMap(user => this.userService.get(user.uid))
      .map(appUser => appUser.isAdmin);
  }
}


