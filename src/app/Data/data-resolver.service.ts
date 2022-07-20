import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ControlService } from "../control/control.service";
import { UsersData } from "./data.model";
import { ServerData } from "./serverData.service";

@Injectable({providedIn:'root'})
export class DataResolverService implements Resolve<UsersData[]>{
       constructor(private serverData:ServerData, private controlService:ControlService){}
                
       resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
            const usersData = this.controlService.getUserDatas();
            if(length === 0){
                 return this.serverData.fetchData();
            }
            else{
                 return usersData;
            }
       }
}