import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WomensJeansProducts } from "./womens-jeans-products.model";

@Injectable({providedIn: 'root'})
export class InfoService{
    private baseUrl:string='https://american-eagle-app-default-rtdb.firebaseio.com/';
    private endpoint: string='jeans-products-womens.json';
    constructor(private http: HttpClient){

    }
    getUserInfo(){
        return this.http.get<WomensJeansProducts[]>(this.baseUrl+this.endpoint);
    }
}