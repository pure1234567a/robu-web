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
    private route: Router,
  ) { 
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {

  }


  openHome() {
    this.signInWithFB();
    this.authService.authState.subscribe((user) => {
      console.log('user : ',user.photoUrl)
      this.user = user;
      window.localStorage.setItem('@user',JSON.stringify(this.user));
      this.loggedIn = (user != null);
    });
    this.route.navigate(['home'])
  }
}
