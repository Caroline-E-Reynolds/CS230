import { Component } from "@angular/core";
import { mock_jean_products_womens } from "./mock-jean-products-womens";
import { WomensJeansProducts } from "./womens-jeans-products.model";

@Component({
    selector:"app-jeans-womens-products",
    templateUrl:"jeans-womens-products.component.html",

})
export class JeanWomensProductsComponent{
    womensJeansProducts:WomensJeansProducts[] = [];

    constructor(){
        for(var womensJeansProducts of mock_jean_products_womens){
            this.womensJeansProducts.push(new WomensJeansProducts(womensJeansProducts));
        }
    }
}