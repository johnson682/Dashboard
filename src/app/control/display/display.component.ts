import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ControlService } from '../control.service';
import { UsersData } from '../../Data/data.model';

@Component({
  selector: 'app-display',
  standalone:false,
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  id:number = 0;
  userDatas!: UsersData;

  constructor(private route:ActivatedRoute, private controlService:ControlService){}

    ngOnInit() {
      this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.userDatas = this.controlService.getUserData(this.id);
      }
      );
    }
  

}
