import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoProductComponent } from './components/no-product/no-product.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { routes } from './routes';
import { AdminGuard } from './services/admin-guard/admin-guard.service';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { CartService } from './services/cart/cart.service';
import { CategoryService } from './services/category/category.service';
import { LoginService } from './services/login/login.service';
import { ProductService } from './services/product/product.service';
import { UserService } from './services/user/user.service';




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
    ProductFilterComponent,
    ProductQuantityComponent
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
