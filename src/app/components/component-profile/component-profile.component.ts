import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-component-profile',
  templateUrl: './component-profile.component.html',
  styleUrls: ['./component-profile.component.css']
})
export class ComponentProfileComponent implements OnInit, AfterViewChecked {

  @Input() getFrameImg: any = [];
  user: any;

  constructor() {

  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('@user'))
    if (this.user) {
      console.log(this.user);
    }

  }

  ngAfterViewChecked() {
    // console.log(this.getFrameImg);
  }

  clickTest() {


  }

}
