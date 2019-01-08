import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login"
import { LoginResponse, FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;


  constructor(
    private authService: AuthService,
    private fb: FacebookService,
    private route: Router,
  ) { 
    const initParams: InitParams = {
      appId: '2134431583284588',
      version: 'v3.2'
    };
    fb.init(initParams);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {

  }

  login() {
    this.fb.login()
      .then((response: LoginResponse) => console.log(' P  mop : ',response))
      .catch((error: any) => console.error(error));
  }

  openHome() {
    this.login()
    this.signInWithFB();
    this.authService.authState.subscribe((user) => {
      // console.log('user : ',user)
      this.user = user;
      // window.localStorage('d',this.user)
      this.loggedIn = (user != null);
    });
    this.route.navigate(['home'])
  }
}
