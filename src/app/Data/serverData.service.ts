import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ControlService } from "../control/control.service";
import { UsersData } from "./data.model";
import { map, tap } from "rxjs/operators"

@Injectable({providedIn:'root'})
export class ServerData{
       constructor( private http:HttpClient,private controlService:ControlService ){}

    postData(){
        const usersData = this.controlService.getUserDatas() ; 
       this.http.put(
           'https://user-data-cb0cc-default-rtdb.asia-southeast1.firebasedatabase.app/data.json', usersData)
           .subscribe(response=>{
               console.log(response);
           });
    }
                 
    fetchData(){
        return this.http
        .get<UsersData[]>(
            'https://user-data-cb0cc-default-rtdb.asia-southeast1.firebasedatabase.app/data.json'
            )
            .pipe(
                tap(userDatas=>{
                    this.controlService.setUserDatas(userDatas)
                })
            )
            }
}