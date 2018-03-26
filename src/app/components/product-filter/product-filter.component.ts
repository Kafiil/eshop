import { CategoryService } from './../../services/category/category.service';
import { Category } from './../../models/Category';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {


  categories: Category[];
  @Input('category') category: string;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe(result => this.categories = result);
  }

}
