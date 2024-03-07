import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
}) 

export class SidenavComponent {

  userName:string ='';
  cData ='';
  cData2 ='';
  business ='';
  cat ='';
  newCategory = '';
  arrow:boolean = false;
  cDataArrow =false;
  bArrow = false;
  cArrow = false;
  nArrow = false;
  
  constructor() { }

  onClickUserName(){
    this.userName = 'John';
    if(!this.arrow){
      this.arrow = true ;
      console.log(this.arrow);
    }
    else{
      this.arrow =false;
      console.log(this.arrow);
    };
    }

    onClickCustomerData(){
      this.cData = 'country';
      this.cData2 = 'rental';
    if(!this.cDataArrow){
      this.cDataArrow = true ;
    }
    else{
      this.cDataArrow =false;
    };
    }
 
    onClickBusiness(){
      this.business = 'Business card';
    if(!this.bArrow){
      this.bArrow = true ;
    }
    else{
      this.bArrow =false;
    };
    }
    
    onClickCat(){
      this.cat = 'Cat card';
    if(!this.cArrow){
      this.cArrow = true ;
    }
    else{
      this.cArrow =false;
    };
    }

    onClickNewCategory(){
      this.newCategory = 'New category card';
      if(!this.nArrow){
      this.nArrow = true ;
    }
    else{
      this.nArrow =false;
    };
    }

    
    }

