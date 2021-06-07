import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component'
import { PlansComponent } from './Components/plans/plans.component'
import { AccountComponent } from './Components/account/account.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { DetailsComponent } from './Components/details/details.component'

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'plans', component: PlansComponent},
  {path: 'signup', component: AccountComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
