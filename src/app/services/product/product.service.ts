import { Product } from './../../models/Product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { IPromise } from 'q';

@Injectable()
export class ProductService {

  nodeName = '/products';
  constructor(private db: AngularFireDatabase) { }


  create(product: Product) {
    debugger;
    return this.db.list(this.nodeName).push(product);
  }

  getAll() {
    return this.db.list(this.nodeName).snapshotChanges()
      .map(actions => {
        return actions.map(action => ({ key: action.key, ...action.payload.val() }));
      });
  }


  getById(id: string) {
    return this.db.object(`${this.nodeName}/${id}`).valueChanges();
  }

  delete(id: string) {
    if (!id) { return; }
    return this.db.list(this.nodeName).remove(id);
  }

  update(id: string, product: Product) {
    return this.db.object(`${this.nodeName}/${id}`).update(product);
  }
}
