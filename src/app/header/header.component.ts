import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  changeColor:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.changeColor = !this.changeColor
  }

}
