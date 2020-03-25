import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent,  data: { animation: 'home' }},
  { path: 'product', component: ProductListComponent}, 
  { path: 'product/add', component: ProductAddComponent},
  { path: 'manager', component: ProductManagerComponent},
  { path: 'product/:productID', component: ProductDetailComponent },
  { path: 'product/edit/:productID', component: ProductEditComponent},
  { path: 'product/add', component: ProductAddComponent}, 
  { path: '**', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
