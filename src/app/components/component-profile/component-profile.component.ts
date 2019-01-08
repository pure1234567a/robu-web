import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-component-profile',
  templateUrl: './component-profile.component.html',
  styleUrls: ['./component-profile.component.css']
})
export class ComponentProfileComponent implements OnInit, AfterViewChecked {

  @Input() getFrameImg: any = [];

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    console.log(this.getFrameImg);
  }

  clickTest() {


  }

}
