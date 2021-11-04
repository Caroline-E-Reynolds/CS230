import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeanWomensProductCardComponent } from './body/jeans-womens-product-card.component';
import { JeanWomensProductsComponent } from './body/jeans-womens-products.component';
import { NewArrivalsPromoComponent } from './body/new-arrivals-promo.component';
import { NewComponent } from './body/new.component';
import { PromotionBannerComponent } from './header/promotion-banner.component';
import { TopBrandLogoComponent } from './header/top-brand-logo.component';
import { TopMegaMenuComponent } from './header/top-mega-menu.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutMainComponent } from './Layout/main-layout.component';
import { LayoutMenJeansComponent } from './Layout/Mens-jeans/mens-jeans-layout.component';
import { LayoutMenNewComponent } from './Layout/Mens-new/mens-new-layout.component';
import { LayoutWomenJeansComponent } from './Layout/Womens-jeans/womens-jeans-layout.component';
import { LayoutWomenNewComponent } from './Layout/Womens-new/womens-new-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutCreateAccountComponent } from './Layout/Account/create-account-layout.component';
import { AccountFormComponent } from './body/create-account-form';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopMegaMenuComponent,
    TopBrandLogoComponent,
    PromotionBannerComponent,
    NewArrivalsPromoComponent,
    LayoutMainComponent,
    NewComponent,
    LayoutWomenNewComponent,
    LayoutMenNewComponent,
    LayoutWomenJeansComponent,
    LayoutMenJeansComponent,
    JeanWomensProductsComponent,
    JeanWomensProductCardComponent,
    UserInfoComponent,
    FooterComponent,
    LayoutCreateAccountComponent,
    AccountFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'american-eagle'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
