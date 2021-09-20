import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewArrivalsPromoComponent } from './body/new-arrivals-promo.component';
import { NewComponent } from './body/new.component';
import { LayoutMainComponent } from './Layout/main-layout.component';

const routes: Routes = [
  {path: '', component : NewArrivalsPromoComponent},
  {path: 'new', component : NewComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
