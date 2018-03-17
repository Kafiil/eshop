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
    private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();
  }

  save(product: Product) {
    console.log('saving');
    this.productService.create(product).then(res => console.log(res));
  }

}
