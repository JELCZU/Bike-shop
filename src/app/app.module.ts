import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';

import { MenuComponent } from './components/menu/menu.component';
import { BtnShoppingComponent } from './components/btn-shopping/btn-shopping.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCheckoutComponent } from './components/product-checkout/product-checkout.component';
import { BtnMenuComponent } from './components/btn-menu/btn-menu.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountLoginComponent } from './components/account-login/account-login.component';
import { BtnHeaderComponent } from './components/btn-header/btn-header.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShipmentComponent } from './components/shipment/shipment.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    ProductComponent,

    MenuComponent,
    BtnShoppingComponent,
    ProductDetailsComponent,
    FooterComponent,
    CheckoutComponent,
    ProductCheckoutComponent,
    BtnMenuComponent,
    CategoriesComponent,
    BikesComponent,
    PaginationComponent,
    CartComponent,
    AccountLoginComponent,
    BtnHeaderComponent,
    ContactComponent,
    ShipmentComponent,
    TermsOfUseComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'page/:pageNumber', component: ProductsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'schipment', component: ShipmentComponent },
      { path: 'terms-of-use', component: TermsOfUseComponent },
      // { path: 'categories', component: CategoriesComponent },
      // { path: '/categories/bikes', component: BikesComponent },
      // { path: '/categories/:categor', component: BikesComponent },
      { path: 'account-login', component: AccountLoginComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ]),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
