import { ServiceApiService } from './../../services/service-api/service-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login"
import { LoginResponse, FacebookService, InitParams } from 'ngx-facebook';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataUser: any;
  private user: SocialUser;
  private loggedIn: boolean;


  constructor(
    private authService: AuthService,
    private route: Router,
    private spinner: NgxSpinnerService,
    private seviceApi: ServiceApiService
  ) {
    this.dataUser = JSON.parse(window.localStorage.getItem('@user'));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  ngOnInit() {
    this.dataUser = JSON.parse(window.localStorage.getItem('@user'));
    if (this.dataUser) {
      this.route.navigate(['select-product']);
    }
  }

  openHome() {
    this.signInWithFB();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.user.photoUrl = "https://graph.facebook.com/" + this.user.id + "/picture?width=2000&height=2000"
      window.localStorage.setItem('@user', JSON.stringify(this.user));

      this.dataUser = JSON.parse(window.localStorage.getItem('@user'));

      this.saveUser();
      this.loggedIn = (user != null);
    });

  }
  saveUser() {
    try {
      console.log('sssssAAAA : ',this.dataUser)
      console.log('sssss : ',this.dataUser.email)
      var dataRegis: any;
      if (this.dataUser) {
        dataRegis = {
          username: this.dataUser.email ? this.dataUser.email : this.dataUser.firstName + this.dataUser.lastName,
          password: 'P@ssw0rd',
          firstname: this.dataUser.firstName,
          lastname: this.dataUser.lastName,
          email: this.dataUser.email ? this.dataUser.email : this.dataUser.firstName + '@hotmail.com'
        }
      }

      let res: any = this.seviceApi.sigup(dataRegis)
      this.route.navigate(['select-product']);
      console.log('resiter' + res)
    } catch (error) {
      console.log('error ' + error)
      if (error.message ==="Email already exists" || error.message ==="Username already exists") {
        this.route.navigate(['select-product']);
      }
    }
  }
}
