import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-component-profile',
  templateUrl: './component-profile.component.html',
  styleUrls: ['./component-profile.component.css']
})
export class ComponentProfileComponent implements OnInit {

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
  getEl(){
    var canvas1 = document.getElementsByClassName("canvas") 
    console.log(canvas1)
    // var s = canvas1.
  
  }

   merceImage() {

    var canvas: any = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var img1 = loadImage('https://pngimg.com/uploads/instagram/instagram_PNG3.png', main);
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
      img.src = src;
      console.log('img : >> ',img)
      return img;
  }
}

}
