import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './modules/orders/orders.module';
import { SiteFrameworkModule } from './modules/site-framework/site-framework.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './modules/services/product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    SiteFrameworkModule,
    HttpClientModule,
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
