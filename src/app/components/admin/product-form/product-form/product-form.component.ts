import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../../../../models/Product';
import { ProductService } from './../../../../services/product/product.service';
import { CategoryService } from '../../../../services/category/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product = {};
  id: string;
  categories$: any;

  constructor(private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getById(this.id).take(1)
        .subscribe(p => this.product = p);
    }
  }


  delete() {
    this.productService.delete(this.id);
    this.cancel();

  }

  save(product: Product) {
    if (this.id) {
      this.productService.update(this.id, this.product);
    } else { this.productService.create(product); }
    this.cancel();
  }

  cancel() {
    this.router.navigateByUrl('/admin/products');
  }

}
