import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { P404Component } from './p404/p404.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProvinciaSelectComponent } from './provincia-select/provincia-select.component';


const routes: Routes = [

{ path:'', component: HomeComponent},
{ path:'home', component: HomeComponent},
{ path:'provincias', component: ProvinciaSelectComponent},
{ path:'provincias/:id/productos', component: ProductListComponent},
{ path:'**', component: P404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
