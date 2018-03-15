import { LoginService } from '../login/login.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private loginService: LoginService) {
  }

  canActivate(): Observable<boolean> {
    return this.loginService.appUser$
      .map(appUser => appUser.isAdmin);
  }
}


