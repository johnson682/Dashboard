import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersData } from '../Data/data.model';
import { ServerData } from '../Data/serverData.service';
import { ControlService } from './control.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})

export class ControlComponent implements OnInit, OnDestroy {
  editMode = false;
  constructor(private router:Router, 
                    private route:ActivatedRoute,
                    private controlService:ControlService,
                    private serverData:ServerData ) { }

  userDatas: UsersData[];
  dataSubscription!: Subscription;
  id!: number;
  usersDatas!:UsersData;
  totalLength:any;
  page:number=1;
  pagePerItem:number = 4;


  onAddNew(){
     this.router.navigate(['addcustomer']);
  }

  ngOnInit() {
    this.userDatas = this.controlService.getUserDatas();
   this.totalLength = this.userDatas.length;
   console.log(this.totalLength);
    this.dataSubscription = this.controlService.userDataChanged
    .subscribe((userDatas:UsersData[])=>{
      this.userDatas = userDatas;
    });
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.usersDatas = this.controlService.getUserData(this.id);
      }
      );
    }

    onUpload(){
           this.serverData.postData();
           this.router.navigate(['dashboard']);
    }

    onFetch(){
      this.serverData.fetchData().subscribe();
    }

    onMenu(){
      this.router.navigate(['menu']);
    }
    
    onEditItem(index:number){
      this.id =  this.pagePerItem * (this.page -1) + index;
      //  this.router.navigate(['editcustomer'], {relativeTo: this.route});
      this.router.navigate(['../', this.id, 'editcustomer'], {relativeTo: this.route});
    }

    onDisplay(index:number){
      this.id =  this.pagePerItem * (this.page -1) + index;
      this.router.navigate(['../', this.id, 'display'], {relativeTo: this.route});
    }
  

  onDelete(index:number) {
    this.controlService.deleteUserDatas(index);
   }

   ngOnDestroy(){
    this.dataSubscription.unsubscribe();
   }

}
