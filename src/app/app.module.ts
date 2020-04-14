import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule} from "@angular/router";

 const routes:any=[{
  path: '', redirectTo: 'products', pathMatch: 'full'
 }, {
   path:'products',component: ProductsComponent},
   {
   path:'checkout',component: CheckoutComponent
 },{ path: '**', redirectTo: '' }]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
