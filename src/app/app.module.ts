import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductsService } from './Services/products.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { PlansComponent } from './Components/plans/plans.component';
import { AccountComponent } from './Components/account/account.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { DetailsComponent } from './Components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PlansComponent,
    AccountComponent,
    PaymentComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
