import { CartService } from './services/cart/cart.service';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { NoProductComponent } from './components/no-product/no-product.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryService } from './services/category/category.service';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login/login.service';
import { UserService } from './services/user/user.service';
import { AdminGuard } from './services/admin-guard/admin-guard.service';
import { ProductFormComponent } from './components/admin/product-form/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product/product.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AdminGuard] },
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AdminGuard] },
  { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AdminGuard] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AdminGuard] },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductComponent,
    NoProductComponent,
    ProductFilterComponent
  ],
  imports: [
    CustomFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase), // Init firebase
    AngularFireAuthModule, // Authorisation
    AngularFireDatabaseModule // Database
  ],
  providers: [LoginService, CartService, ProductService, CategoryService, UserService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
