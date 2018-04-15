import { Routes } from '@angular/router';

import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AdminGuard } from './services/admin-guard/admin-guard.service';
import { AuthGuard } from './services/auth-guard/auth-guard.service';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
    { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
    { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
    { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
    { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
    { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AdminGuard] },
    { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AdminGuard] },
    { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AdminGuard] },
    { path: 'admin/products', component: AdminProductsComponent, canActivate: [AdminGuard] },
    { path: '', component: HomeComponent },
];
