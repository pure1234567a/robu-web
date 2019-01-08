import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  frameImg: any;
  user:any;

  constructor() { }

  ngOnInit() {
   this.user = JSON.parse(window.localStorage.getItem('@user'))
   console.log('home :',this.user);
  }

  getFrame(e) {
    this.frameImg = e;
    // console.log(this.frameImg);
  }

}
