import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { UserInfo } from "../header/user-info.model";

@Injectable({
    providedIn:'root'
})
export class DatabaseService{
    items:Observable<UserInfo[]>;
    constructor(private db:AngularFireDatabase){
        console.log("setting up firebase communication");
        this.items=this.db.list<UserInfo>('account-info').valueChanges();
    }

    public showData(){
        this.items.subscribe((data: UserInfo[])=>{
            console.log("data recieved");
            for(let item of data){
                console.log(item);
            }
        }
        )
    }
}