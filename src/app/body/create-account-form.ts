import { Component } from "@angular/core";
import { InfoService } from "./info.services";
import { UserInfo } from "../header/user-info.model";
import { DatabaseService } from "./database.service";

@Component({
    selector: 'app-account-form',
    templateUrl: 'create-account-form.component.html',
   })
   
   export class AccountFormComponent {
       constructor(private infoService: InfoService,private dbService: DatabaseService){
        dbService.showData();
       }
       onCreateAccount(data: UserInfo){
           this.infoService.modifyUserInfo(data).subscribe(data=>{
            console.log("create account");
           })
       }
   }