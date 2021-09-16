import { Component } from "@angular/core";

@Component({
    selector: 'app-promotion-banner',
    templateUrl: 'promotion-banner.component.html',
    styleUrls: ['./promotion-banner.component.css']
   })
   
   export class PromotionBannerComponent {
    promo = "Use code: AUTUMN20 & take an extra 20% off, exclusively in the app!"
    divider =" | "
    link1 = "Downlaod the lastest version"
    link2 = "Details"
   }