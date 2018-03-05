import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class LoginService {
  user$: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.user$ = angularFireAuth.authState;
  }


  logIn() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res: any) => {
        // console.log(res);
      });

  }


  logOut(): any {
    this.angularFireAuth.auth.signOut();
  }
}
