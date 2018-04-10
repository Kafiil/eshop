import { Router } from '@angular/router';
import { CartItem } from './../../models/cartItem';
import { Cart } from './../../models/cart';
import { CartService } from './../../services/cart/cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items: CartItem[];
  cart: Cart;
  @Input() readOnly: boolean;
  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
      if (!cart) { return; }
      this.items = this.cart.items.filter(e => e.quantity);
    });
  }

  clearCart() {
    this.cartService.clear();
    this.router.navigateByUrl('/');
  }



}
