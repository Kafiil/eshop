import { Product } from './../../models/Product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  nodeName = '/products';
  constructor(private db: AngularFireDatabase) { }


  create(product: Product) {
    return this.db.list(this.nodeName).push(product);
  }

  getAll() {
    return this.db.list(this.nodeName).snapshotChanges()
      .map(actions => {
        return actions.map(action => ({ key: action.key, ...action.payload.val() }));
      });
  }

  delete(productId: string) {
    return this.db.list(this.nodeName).remove(productId);
  }
}
