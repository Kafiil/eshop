import { Cart } from './../../models/cart';
import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('product') product: Product;
  @Input('cart') cart: Cart;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addToCart(this.product, 1);
  }

  removeFromCart() {
    this.cartService.addToCart(this.product, -1);
  }

  getQuantity() {
    if (!this.cart) { return; }
    const item: CartItem = this.cart.items.filter(i => i.key === this.product.key)[0];
    return item ? item.quantity : 0;
  }

}
