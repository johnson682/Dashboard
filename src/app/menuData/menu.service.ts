import { Injectable } from "@angular/core";
import menus from "./menu.json"
import { menuData } from "./menu.model";


@Injectable({providedIn:"root"})
export class MenuService{
    
    labels:any = [];
    data1:any = [];
    data2:any = [];
    growth:menuData[];
    name = ['SG&A Spend Growth %', 'SG&A Spend as a % of Revenue'];
    label = ['2013', '2014'];
  
    constructor(){
  
      for(let menu of menus.hits   ){
             this.labels.push(menu['_id']) 
            if(menu['_source']){
              this.data1.push(menu['_source']['SG&A Spend Growth %']['2013']);
          }
          else{
            this.data1.push( menu['SG&A Spend Growth %']['2013']);
          }
            if(menu['_source']){
              this.data2.push( menu['_source']['SG&A Spend Growth %']['2014']);
          }
          else{
            this.data2.push(menu['SG&A Spend Growth %']['2014']);
          } 
      }

      this.growth = [
          new menuData(this.name, this.labels, this.label, this.data1, this.data2 )
      ]
      
    //   this.growth = {
    //     "name":["SG&A Spend Growth %"],
    //    "labels": this.labels,
    //    "datasets": [
    //      {
    //        "label": "2013",
    //        "data": [this.data1]
    //      },
    //      {
    //        "label": "2014",
    //        "data": [this.data2]
    //      }
    //    ]
    //  }
    //  console.log(this.growth)
  
    }

    getGrowth(){
          return this.growth.slice();
    }

}