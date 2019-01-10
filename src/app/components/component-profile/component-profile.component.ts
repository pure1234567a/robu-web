import { Component, OnInit, Input, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-component-profile',
  templateUrl: './component-profile.component.html',
  styleUrls: ['./component-profile.component.css']
})
export class ComponentProfileComponent implements OnInit {

  @Input() getFrameImg: any = [];
  user: any;
  // userImg:any = "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/33037353_1774105469351187_6162166278820724736_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk12-1.fna&oh=2a5f4827d44e73fcc805042ec15d83d4&oe=5CC6C4D2"
  userImg: any;
  @ViewChild('canvas') canvas: ElementRef

  constructor() {

  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('@user'))
    if (this.user) {
      console.log(this.user);
      this.userImg = this.user.photoUrl
    }
  }
  getEl(){
    var canvas1 = document.getElementsByClassName("canvas") 
    console.log(canvas1)
    // var s = canvas1.
  
  }

  clickToMerge() {
    // console.log(this.getFrameImg);
    var canvas: any = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var img1 = loadImage(this.userImg, main);
    var img2 = loadImage(this.getFrameImg.image.url, main);

    var imagesLoaded = 0;
    function main() {
      imagesLoaded = imagesLoaded + 1;

      if (imagesLoaded == 2) {
        // composite now
        ctx.drawImage(img1, 0, 0, img1.width, img1.height, 0, 0, canvas.width, canvas.height);

        ctx.globalAlpha = 1;
        ctx.drawImage(img2, 0, 0, img2.width, img2.height, 0, 0, canvas.width, canvas.height);
      }
    }

    function loadImage(src, onload) {
      var img = new Image();

      img.onload = onload;
      img.crossOrigin = "Anonymous";
      img.src = src;
      return img;
    }
  }

  getMerge() {
    var canvas = document.getElementById('canvas') as HTMLCanvasElement;
    var dataURL = canvas.toDataURL();
    console.log(dataURL);
  }
}


