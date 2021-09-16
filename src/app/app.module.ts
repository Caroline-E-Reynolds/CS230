import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewArrivalsPromoComponent } from './body/new-arrivals-promo.component';
import { PromotionBannerComponent } from './header/promotion-banner.component';
import { TopBrandLogoComponent } from './header/top-brand-logo.component';
import { TopMegaMenuComponent } from './header/top-mega-menu.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutMainComponent } from './Layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopMegaMenuComponent,
    TopBrandLogoComponent,
    PromotionBannerComponent,
    NewArrivalsPromoComponent,
    LayoutMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
