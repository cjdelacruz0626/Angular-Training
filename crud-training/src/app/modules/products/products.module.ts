import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ReadProductComponent } from './read-product/read-product.component';
import { ReadAllProductsComponent } from './read-all-products/read-all-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ReadAllProductsByDateComponent } from './read-all-products-by-date/read-all-products-by-date.component';
import { ReadAllProductsByCategoryComponent } from './read-all-products-by-category/read-all-products-by-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ReadProductComponent,
    ReadAllProductsComponent,
    DeleteProductComponent,
    ReadAllProductsByDateComponent,
    ReadAllProductsByCategoryComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
