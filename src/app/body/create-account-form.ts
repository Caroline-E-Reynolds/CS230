import { Component } from "@angular/core";
import { InfoService } from "./info.services";
import { UserInfo } from "../header/user-info.model";
import { WomensJeansProducts } from "./womens-jeans-products.model";

@Component({
    selector: 'app-account-form',
    templateUrl: 'create-account-form.component.html',
   })
   
   export class AccountFormComponent {
       constructor(private infoService: InfoService){

       }
       onCreateAccount(data: UserInfo){
           this.infoService.modifyUserInfo(data).subscribe(data=>{
            console.log("create account");
           })
       }
   }