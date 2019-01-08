import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  frameImg: any;

  constructor() { }

  ngOnInit() {
  }

  getFrame(e) {
    this.frameImg = e;
    // console.log(this.frameImg);
  }

}
