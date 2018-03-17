import { Router } from '@angular/router';
import { Product } from './../../../../models/Product';
import { ProductService } from './../../../../services/product/product.service';
import { CategoryService } from '../../../../services/category/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$: any;
  constructor(private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();
  }

  save(product: Product) {
    this.productService.create(product).then(() => {
      this.cancel();
    });
  }

  cancel() {
    this.router.navigateByUrl('/admin/products');
  }

}
