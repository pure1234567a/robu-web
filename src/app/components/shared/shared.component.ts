import { Component, OnInit, Input, EventEmitter, AfterViewChecked } from '@angular/core';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';
import * as firebase from 'firebase';
import { NgxSpinnerService } from 'ngx-spinner';
// import { ClassUpload } from './class-upload';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  @Input() imageInput: any;
  // private basePath: string = '/uploads';
  imageArray: any = [];
  // currentUpload: ClassUpload;
  uploadProgress: number;
  user: any;
  images: any;

  constructor(
    private fb: FacebookService,
    private spinner: NgxSpinnerService
  ) {
    const initParams: InitParams = {
      appId: '391466811398230',
      version: 'v3.2'
    };

    fb.init(initParams);
  }


  ngOnInit() {
    console.log(this.imageInput);
    this.user = JSON.parse(window.localStorage.getItem('@user'));
    // console.log(this.imageInput);
  }
  // onClickShare() {
  //   console.log('object');
  //   const element: HTMLElement = document.getElementById('u_0_2') as HTMLElement;
  //   console.log(element);

  //   element.click();
  // }
  shareWithOpenGraphActions() {

    // this.pushUpload(this.imageInput).then(res => {
    const params: UIParams = {
      method: 'share',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object: {
          // 'og:url': 'https://angular-for-seo.firebaseapp.com',
          'og:title': 'RabuRabuLoveLove',
          'og:description': 'ข้อความยาว ๆ',
          'og:image': 'https://cache.gmo2.sistacafe.com/images/uploads/summary/image/41751/3e9fea8de38ad5631fd691a1e9c54c26.jpg'
        }
      })
    };
    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
    // }).catch(err => {
    //   console.log(err)
    // });

    // const image = await this.pushUpload(this.imageInput);
    // console.log(image);
    // const params: UIParams = {
    //   method: 'share',
    //   action_type: 'og.likes',
    //   action_properties: JSON.stringify({
    //     object: {
    //       // 'og:url': 'https://angular-for-seo.firebaseapp.com',
    //       'og:title': 'RabuRabuLoveLove',
    //       'og:description': 'ข้อความยาว ๆ',
    //       'og:image': image
    //     }
    //   })
    // };
    // this.fb.ui(params)
    //   .then((res: UIResponse) => console.log(res))
    //   .catch((e: any) => console.error(e));

  }
  // pushUpload(base64) {
  //   this.spinner.show()
  //   return new Promise((resove, reject) => {
  //     const storageRef = firebase.storage().ref();
  //     const fileRandom = Math.floor((Date.now() / 1000) + new Date().getUTCMilliseconds());
  //     const uploadTask: any = storageRef.child(`images/uploads/${fileRandom}.jpg`);
  //     uploadTask.putString(base64, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
  //       uploadTask.getDownloadURL().then(url => {
  //         resove(url);
  //       });
  //     });
  //     this.spinner.hide()
  //   });
  // }

}
