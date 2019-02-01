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

  private user: SocialUser;
  private loggedIn: boolean;


  constructor(
    private authService: AuthService,
    private route: Router,
    private spinner: NgxSpinnerService,
    private seviceApi: ServiceApiService
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
      this.user = user;
      this.user.photoUrl = "https://graph.facebook.com/" + this.user.id + "/picture?width=2000&height=2000"
      window.localStorage.setItem('@user', JSON.stringify(this.user));
      this.loggedIn = (user != null);
      this.route.navigate(['home'])
    });
    this.saveUser();
  }
  saveUser() {
    try {
      let dataUser = JSON.parse(window.localStorage.getItem('@user'));
      console.log(dataUser);
      let data = {
        username: dataUser.email ? dataUser.email : dataUser.firstName + dataUser.lastName,
        password: 'P@ssw0rd'
      }
      let user: any = this.seviceApi.saveUser(data);
      console.log('login' + user)
      console.log('login')
      if (!user) {
        console.log('regis');
        let dataRegis = {
          username: dataUser.email ? dataUser.email : dataUser.firstName + dataUser.lastName,
          password: 'P@ssw0rd',
          firstname: dataUser.firstName,
          lastname: dataUser.lastName,
          email: dataUser.email ? dataUser.email : dataUser.firstName + dataUser.lastName + '@hotmail.com'
        }
        let res: any = this.seviceApi.sigup(dataRegis)
        console.log('resiter' + res)
      }
    } catch (error) {
      console.log('error ' + error)
    }
  }
}
