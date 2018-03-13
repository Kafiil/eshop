import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {AppUser} from '../../models/AppUser';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) {
  }

  save(user: firebase.User) {
    this.db.object(`/users/${user.uid}`).update({
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      lastLoggedInAt: new Date(),
    })
      .then((data: any) => {
        console.log(data);
      });
  }

  get(uid: string): Observable<AppUser> {
    return this.db.object(`/users/${uid}`).valueChanges();
  }
}
