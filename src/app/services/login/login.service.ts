import { UserService } from './../user/user.service';
import { AppUser } from './../../models/AppUser';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class LoginService {
  user$: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) {
    this.user$ = angularFireAuth.authState;
  }

  logIn() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res: any) => {
      });
  }

  logOut(): any {
    this.angularFireAuth.auth.signOut();
    this.router.navigateByUrl('');
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(u => {
        if (!u) { return Observable.of(null); }
        return this.userService.get(u.uid);
      });
  }
}
