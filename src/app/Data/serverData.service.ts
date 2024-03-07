import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ControlService } from "../control/control.service";
import { UsersData } from "./data.model";
import { tap } from "rxjs/operators"

@Injectable({providedIn:'root'})
export class ServerData{
       constructor( private http:HttpClient,private controlService:ControlService ){}

    postData(){
        const usersData = this.controlService.getUserDatas() ; 
       this.http.put(
        // check this website for demo res calls for Realtime Database https://firebase.google.com/docs/reference/rest/database
        //dashboard-92cb7-default-rtdb -> PROJECT_ID, data.json(it can be in any name ) -> database name
           'https://dashboard-92cb7-default-rtdb.firebaseio.com/data.json', usersData)
           .subscribe(response=>{
               console.log(response);
           });
    }
                 
    fetchData(){
        return this.http
        .get<UsersData[]>(
            'https://dashboard-92cb7-default-rtdb.firebaseio.com/data.json'
            )
            .pipe(
                tap(userDatas=>{
                    this.controlService.setUserDatas(userDatas)
                })
            )
            }
}