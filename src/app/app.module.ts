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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'checkout', component: CheckoutComponent },
    ]),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
