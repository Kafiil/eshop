import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.loginService.user$.map(user => {
      if (user) { return true; }
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    });
  }

}
