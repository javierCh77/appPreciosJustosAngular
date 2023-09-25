import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// aqui los import de las vistas
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProvinciaSelectComponent } from './provincia-select/provincia-select.component';
import { HomeComponent } from './home/home.component';
import { P404Component } from './p404/p404.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProvinciaSelectComponent,
    HomeComponent,
    P404Component,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
