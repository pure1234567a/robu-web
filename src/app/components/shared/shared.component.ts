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
  @Input() detailInput: any;

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
      appId: '2134431583284588',
      version: 'v3.2'
    };

    fb.init(initParams);
  }


  ngOnInit() {
    // console.log(this.imageInput);
    console.log(this.images);
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
          'og:description': this.detailInput,
          'og:image': this.imageInput
        }
      })
    };
    this.fb.ui(params)
      .then((res: UIResponse) => {
        close(); 
      })
      .catch((e: any) => console.error(e));
  }

}
