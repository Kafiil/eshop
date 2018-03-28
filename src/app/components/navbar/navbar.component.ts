import { Cart } from './../../models/cart';
import { CartService } from './../../services/cart/cart.service';
import { LoginService } from '../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../models/AppUser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appUser: AppUser;
  isCollapsed = true;
  cart: Cart;
  totalItemCount = 0;

  constructor(private auth: LoginService, private cartService: CartService) {

  }

  ngOnInit() {
    this.auth.appUser$.subscribe((user: AppUser) => {
      this.appUser = user;
    });

    this.cartService.getCart().subscribe(c => {
      this.cart = c;
      if (!c) { return; }
      this.totalItemCount = 0;
      Object.keys(c.items).forEach(e => {
        this.totalItemCount += c.items[e].quantity;
      });
    });
  }

  logout() {
    this.auth.logOut();
  }

  toggleNavigation() {
    this.isCollapsed = !this.isCollapsed;
  }

  getTotalCount() {
    if (!this.cart) { return; }

    // Object.keys(this.cart.items).forEach(e => console.log(e));
    console.log(Object.keys(this.cart.items).length);

    // .reduce((a, b) => this.cart.items[a].quantity + this.cart.items[b].quantity, 0);
  }
}
