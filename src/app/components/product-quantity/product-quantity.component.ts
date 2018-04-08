import { CartItem } from './../../models/cartItem';
import { CartService } from './../../services/cart/cart.service';
import { Cart } from './../../models/cart';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  @Input() cart: Cart;
  @Input() product: Product;

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
