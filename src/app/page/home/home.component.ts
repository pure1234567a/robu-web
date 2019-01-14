import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  setframe: Boolean = false;
  frameImg: any;
  user: any;
  // userImg: any = "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/33037353_1774105469351187_6162166278820724736_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk12-1.fna&oh=2a5f4827d44e73fcc805042ec15d83d4&oe=5CC6C4D2"
  userImg: any;
  @ViewChild('canvas') canvas: ElementRef
  dataURL: any;
  imageArray: any;
  images: any;
  constructor(
    private spinner: NgxSpinnerService
  ) {

  }

  async ngOnInit() {
    this.spinner.show()
    this.user = await JSON.parse(window.localStorage.getItem('@user'))
    console.log('home : ', this.user);
    if (this.user && this.user.photoUrl) {
      this.userImg = this.user.photoUrl
      console.log('userImg : ', this.userImg)
      this.spinner.hide();
    } else {
      this.spinner.hide();
    }
  }

  async getFrame(e) {
    this.frameImg = await e;
    this.setframe = await true;
    // setTimeout(() => {
    await this.clickToMerge(e);
    // }, 100);
  }

  async clickToMerge(img) {
    console.log(this.setframe);
    // console.log(this.getFrameImg);
    var canvas: any = await document.getElementById("canvas");
    var ctx = await canvas.getContext("2d");

    var img1 = await loadImage(this.userImg, main);
    var img2 = await loadImage(img.image.url, main);

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
    this.getMerge()
  }

  async getMerge() {
    var getCnvs = await document.getElementById('canvas') as HTMLCanvasElement;
    this.dataURL = await getCnvs.toDataURL();
    // console.log(this.dataURL);
    this.images = await this.dataURL;
    // console.log(this.images)
    await this.spinner.hide()
  }

}
