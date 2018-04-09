import { Product } from './../../../models/Product';
import { ProductService } from './../../../services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: Product[];
  filteredProducts: Product[];

  constructor(private productService: ProductService) {
    this.productService.getAll()
      .subscribe(p => {
        this.products = this.filteredProducts = p;
      });
  }

  ngOnInit() {
  }

  delete(productId: string) {
    if (!confirm('Are you sure you want to delete this item ? ')) { return; }
    this.productService.delete(productId);
  }

  search(value: string) {
    this.filteredProducts = this.products
      .filter(p => this.contains(p.category, value) || this.contains(p.title, value));
  }


  private contains(filter: string, value: string) {
    return filter.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1;
  }



}
