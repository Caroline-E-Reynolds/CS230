import { Component, Input } from "@angular/core";

@Component({
    selector:"app-jeans-womens-product-card",
    templateUrl:"jeans-womens-product-card.component.html",

})
export class JeanWomensProductCardComponent{
    @Input()
    title!: string;
    @Input()
    tag!: string;
    @Input()
    price!: string;
    @Input()
    imagePath!: string;
}