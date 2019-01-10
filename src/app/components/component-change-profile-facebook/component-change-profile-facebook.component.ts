import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-component-change-profile-facebook',
  templateUrl: './component-change-profile-facebook.component.html',
  styleUrls: ['./component-change-profile-facebook.component.css']
})
export class ComponentChangeProfileFacebookComponent implements OnInit {
  user: any;
  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '217854369152043',
      version: 'v3.2'
    };

    fb.init(initParams);
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('@user'));
    if (this.user) {
      console.log(this.user);
    }

  }

  ChangeProfile() {
    // this.fb.api('https://www.khaosod.co.th/wp-content/uploads/2016/09/14333162_320123348342430_1546313821850115366_n.jpg'
    //   // if (response && !response.error) {
    //   /* handle the result */
    //   // }

    // );
    this.fb.api('/' + this.user.id + '/photos', 'post', {
      'url': 'https://www.khaosod.co.th/wp-content/uploads/2016/09/14333162_320123348342430_1546313821850115366_n.jpg',
      'published': false
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

}