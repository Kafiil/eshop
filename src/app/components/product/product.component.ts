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
  constructor() { }

  ngOnInit() {
  }



}
