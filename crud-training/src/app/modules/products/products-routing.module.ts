import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { ReadAllProductsByCategoryComponent } from './read-all-products-by-category/read-all-products-by-category.component';
import { ReadAllProductsByDateComponent } from './read-all-products-by-date/read-all-products-by-date.component';
import { ReadAllProductsComponent } from './read-all-products/read-all-products.component';
import { ReadProductComponent } from './read-product/read-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: '', component: ReadAllProductsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'search-category', component: ReadAllProductsByCategoryComponent},
  { path: 'search-date', component: ReadAllProductsByDateComponent},
  { path: 'delete-product/:id', component: DeleteProductComponent},
  { path: 'view-product/:id', component: ReadProductComponent},
  { path: 'update-product/:id', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
