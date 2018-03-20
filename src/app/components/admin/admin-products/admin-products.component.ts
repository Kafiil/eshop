import { Product } from './../../../models/Product';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$: any;
  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();
  }

  ngOnInit() {
  }

  delete(productId: string) {
    if (!confirm('Are you sure you want to delete this item ? ')) { return; }
    this.productService.delete(productId);
  }

}
