import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// export interface Frame {
//   id: string;
//   image: string;
// }


@Component({
  selector: 'app-component-frames-profile',
  templateUrl: './component-frames-profile.component.html',
  styleUrls: ['./component-frames-profile.component.css']
})
export class ComponentFramesProfileComponent implements OnInit {
  check: any = {
    id: ''
  }
  frame: any;
  @Output() sendFrame = new EventEmitter();
  user: any;
  // userImg: any = "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/33037353_1774105469351187_6162166278820724736_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk12-1.fna&oh=2a5f4827d44e73fcc805042ec15d83d4&oe=5CC6C4D2"
  // // userImg: any;
  // @ViewChild('canvas') canvas: ElementRef

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getFrame()
  }

  async getFrame() {
    const res: any = await this.http.get('../../../assets/json/json-frame.json').toPromise();
    this.frame = res
    console.log(this.frame);
  }

  // image: Frame[] = [
  //   { id: "1", image: "./assets/img/frame-0.png" },
  //   { id: "2", image: "./assets/img/frame-1.png" },
  //   { id: "3", image: "./assets/img/frame-2.png" },
  //   { id: "4", image: "./assets/img/frame-3.png" },
  //   { id: "5", image: "https://res.cloudinary.com/dyiuidzsc/image/upload/v1546922692/Rabu%20Rabu/f1.png" },
  //   { id: "6", image: "https://res.cloudinary.com/dyiuidzsc/image/upload/v1546922690/Rabu%20Rabu/f3.png" },
  //   { id: "7", image: "https://res.cloudinary.com/dyiuidzsc/image/upload/v1546922692/Rabu%20Rabu/f4.png" },
  //   { id: "8", image: "https://res.cloudinary.com/dyiuidzsc/image/upload/v1546922692/Rabu%20Rabu/f1.png" },

  // ]

  select(img) {
    console.log(img)
    this.check.id = img._id
    this.sendFrame.emit(img);
    // this.clickToMerge(img);
  }

  // clickToMerge(img) {
  //   // console.log(this.getFrameImg);
  //   var canvas: any = document.getElementById("canvas");
  //   var ctx = canvas.getContext("2d");

  //   var img1 = loadImage(this.userImg, main);
  //   var img2 = loadImage(img.image.url, main);

  //   var imagesLoaded = 0;
  //   function main() {
  //     imagesLoaded = imagesLoaded + 1;

  //     if (imagesLoaded == 2) {
  //       // composite now
  //       ctx.drawImage(img1, 0, 0, img1.width, img1.height, 0, 0, canvas.width, canvas.height);

  //       ctx.globalAlpha = 1;
  //       ctx.drawImage(img2, 0, 0, img2.width, img2.height, 0, 0, canvas.width, canvas.height);
  //     }
  //   }

  //   function loadImage(src, onload) {
  //     var img = new Image();

  //     img.onload = onload;
  //     img.crossOrigin = "Anonymous";
  //     img.src = src;
  //     return img;
  //   }
  // }

  // getMerge() {
  //   var getCnvs = document.getElementById('canvas') as HTMLCanvasElement;
  //   var dataURL = getCnvs.toDataURL();
  //   console.log(dataURL);
  // }


}
