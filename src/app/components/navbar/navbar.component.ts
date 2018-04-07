import { Cart } from './../../models/cart';
import { CartService } from './../../services/cart/cart.service';
import { LoginService } from '../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../models/AppUser';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appUser: AppUser;
  isCollapsed = true;
  cart$: Observable<Cart>;

  constructor(private auth: LoginService, private cartService: CartService) {

  }

  ngOnInit() {
    this.auth.appUser$.subscribe((user: AppUser) => {
      this.appUser = user;
    });

    this.cart$ = this.cartService.getCart();
  }

  logout() {
    this.auth.logOut();
  }

  toggleNavigation() {
    this.isCollapsed = !this.isCollapsed;
  }
}
