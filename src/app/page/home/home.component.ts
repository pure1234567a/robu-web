import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import * as firebase from 'firebase';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  setframe: Boolean = false;
  frameImg: any;
  user: any;
  // userImg: any = "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/33037353_1774105469351187_6162166278820724736_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk12-1.fna&oh=2a5f4827d44e73fcc805042ec15d83d4&oe=5CC6C4D2"
  userImg: any;
  @ViewChild('canvas') canvas: ElementRef
  dataURL: any;
  imageArray: any;
  images: any;
  status: Boolean = false;

  constructor(
    private spinner: NgxSpinnerService
  ) {

  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('@user'))
    // console.log(this.user);
    if (this.user && this.user.photoUrl) {
      this.userImg = this.user.photoUrl
      // console.log('userImg : ', this.userImg)
    }
  }

  ngAfterViewChecked() {
    if (this.status) {
      this.getMerge()
    }
  }

  getFrame(e) {
    this.frameImg = e;
    this.setframe = true;
    if (e) {
      this.clickToMerge(e);
    }
  }

  async clickToMerge(img) {
    console.log(img);
    console.log(this.userImg);
    var canvas: any = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var img1 = await loadImage(this.userImg, main);
    var img2 = await loadImage(img.image.url, main);

    var imagesLoaded = 0;
    function main() {
      imagesLoaded = imagesLoaded + 1;
      console.log('0');
      if (imagesLoaded == 2) {
        // composite now
        ctx.drawImage(img1, 0, 0, img1.width, img1.height, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
        ctx.drawImage(img2, 0, 0, img2.width, img2.height, 0, 0, canvas.width, canvas.height);
        console.log('1');
        this.status = true;
      }
    }

    function loadImage(src, onload) {
      var img = new Image();
      img.onload = onload;
      img.crossOrigin = "Anonymous";
      img.src = src;
      console.log('2');
      return img;
    }
  }

  getMerge() {
    var getCnvs = document.getElementById('canvas') as HTMLCanvasElement;
    this.dataURL = getCnvs.toDataURL();
    // console.log(this.dataURL);
    this.images = this.dataURL;
    // console.log(this.images)
    this.spinner.hide();
    console.log('3');
    this.status = false;
  }

}
