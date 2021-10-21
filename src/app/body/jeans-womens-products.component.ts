import { Component, OnInit } from "@angular/core";
import { InfoService } from "./info.services";
import { WomensJeansProducts } from "./womens-jeans-products.model";


@Component({
    selector:"app-jeans-womens-products",
    templateUrl:"jeans-womens-products.component.html",

})
export class JeanWomensProductsComponent implements OnInit{
    womensJeansProducts:WomensJeansProducts[] =[];

    constructor(private infoService : InfoService){

    }
    ngOnInit(): void{
        console.log("Getting product info");
        this.showProductInfo();
    }
    showProductInfo(){
        this.infoService.getUserInfo().subscribe((data:WomensJeansProducts[])=>{
            for(var item in data){
                console.log(data[item]);
                this.womensJeansProducts.push(data[item]);
            }
            
        })
    }
}