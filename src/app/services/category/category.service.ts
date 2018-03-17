import { Category } from './../../models/Category';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll(): Observable<Category[]> {
    return this.db.list<Category>('/categories', ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(actions => {
        return actions.map(action => ({ key: action.key, ...action.payload.val() }));
      });

  }
}
