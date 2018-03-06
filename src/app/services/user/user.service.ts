import { AppUser } from './../../models/AppUser';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object(`/users/${user.uid}`).update({
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      lastLoggedInAt: new Date(),
    });
  }
  get(uid: string): Observable<any> {
    return this.db.object(`/users/${uid}`).valueChanges();
  }
}
