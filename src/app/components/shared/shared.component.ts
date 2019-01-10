import { Component, OnInit, Input, EventEmitter, AfterViewChecked } from '@angular/core';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';
import * as firebase from 'firebase';
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

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '2134431583284588',
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

    this.pushUpload(this.imageInput).then(res => {
      const params: UIParams = {
        method: 'share',
        action_type: 'og.likes',
        action_properties: JSON.stringify({
          object: {
            // 'og:url': 'https://angular-for-seo.firebaseapp.com',
            'og:title': 'RabuRabuLoveLove',
            'og:description': 'ข้อความยาว ๆ',
            'og:image': res
          }
        })
      };
      this.fb.ui(params)
        .then((res: UIResponse) => console.log(res))
        .catch((e: any) => console.error(e));
    }).catch(err => {
      console.log(err)
    });

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

    // const reader: any = new FileReader();
    // reader.onload = () => {
    //   const base64 = reader.result.replace(/\n/g, '');
    //   this.pushUpload(base64);
    // };


  }
  pushUpload(base64) {
    return new Promise((resove, reject) => {
      const storageRef = firebase.storage().ref();
      const fileRandom = Math.floor((Date.now() / 1000) + new Date().getUTCMilliseconds());
      const uploadTask: any = storageRef.child(`images/uploads/${fileRandom}.jpg`);
      uploadTask.putString(base64, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
        uploadTask.getDownloadURL().then(url => {
          resove(url);
        });
      });
    });
  }

}
