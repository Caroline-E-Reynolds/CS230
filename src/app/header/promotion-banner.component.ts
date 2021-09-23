import { Component } from "@angular/core";

@Component({
    selector: 'app-promotion-banner',
    templateUrl: 'promotion-banner.component.html',
    styleUrls: ['./promotion-banner.component.css']
   })
   
   export class PromotionBannerComponent {
    promo = "20% off jeans & joggers! Select styles."
    divider =" | "
    link1 = "Women's Jeans"
    link2 = "Men's Jeans"
    link3 = "Women's Joggers"
    link4="Men's Joggers"
   }