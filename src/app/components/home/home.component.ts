import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../../models/Product';
import { CategoryService } from './../../services/category/category.service';
import { Category } from './../../models/Category';
import { ProductService } from './../../services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category: string;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.productService.getAll()
      .switchMap(result => {
        this.products = result;
        return this.route.queryParamMap;
      })
      .subscribe(r => {
        this.category = r.get('category');
        this.filter();
      });
  }

  filter() {
    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category)
      : this.products;
  }

}
