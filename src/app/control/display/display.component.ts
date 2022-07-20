import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersData } from 'src/app/Data/data.model';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  id:number;
  userDatas:UsersData;

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
