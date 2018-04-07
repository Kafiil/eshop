import { CartItem } from './../../models/cartItem';
import { Cart } from '../../models/cart';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../models/Product';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  constructor(private db: AngularFireDatabase) {
  }

  private create() {
    const dateCreated = new Date().getTime();
    return this.db.list('/carts').push({
      dateCreated
    });
  }

  getCart(): Observable<Cart> {
    const cartId = this.getOrCreateCartId();
    return this.db.object('/carts/' + cartId).valueChanges()
      .map((c: Cart) => {
        // tslint:disable-next-line:prefer-const
        let cart = new Cart();
        if (c && c.items) {
          const cartItems: CartItem[] = [];
          Object.keys(c.items).forEach(e => cartItems.push(c.items[e] as CartItem));
          cart.items = cartItems;
        }
        return cart;
      });
  }

  private getOrCreateCartId(): string {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      this.create().then(c => c.key);
    } else { return cartId; }
  }

  createOrUpdateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      this.create().then(r => {
        cartId = r.key;
        localStorage.setItem('cartId', cartId);
      });
    }
    return cartId;

  }

  addToCart(product: Product, change: number): any {
    const cartId = this.createOrUpdateCartId();
    const items$ = this.db.object(`/carts/${cartId}/items/${product.key}`);
    items$.valueChanges().take(1).subscribe((i: any) => {
      const quantity = i ? i.quantity + change : 1;
      items$.set({ ...product, quantity });
    });
  }

  clear() {
    const cartId = this.createOrUpdateCartId();
    this.db.object(`/carts/${cartId}/items`).remove();
  }


}


