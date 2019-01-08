import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '217854369152043',
      version: 'v3.2'
    };

    fb.init(initParams);
  }


  ngOnInit() {
  }
  // onClickShare() {
  //   console.log('object');
  //   const element: HTMLElement = document.getElementById('u_0_2') as HTMLElement;
  //   console.log(element);

  //   element.click();
  // }
  shareWithOpenGraphActions() {
    const params: UIParams = {
      method: 'share',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object: {
          // 'og:url': 'https://angular-for-seo.firebaseapp.com',
          'og:title': 'RabuRabuLoveLove',
          'og:description': 'ข้อความยาว ๆ',
          'og:image': 'https://futurism.com/wp-content/uploads/2017/09/download-600x315.png'
        }
      })
    };
    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }
}
