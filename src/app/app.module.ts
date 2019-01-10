import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { ComponentFramesProfileComponent } from './components/component-frames-profile/component-frames-profile.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatGridListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './page/home/home.component';
import { SharedComponent } from './components/shared/shared.component';
import { FacebookModule } from 'ngx-facebook';
import { ComponentProfileComponent } from './components/component-profile/component-profile.component';
import { HttpClientModule } from '@angular/common/http';

import { SocialLoginModule, AuthServiceConfig, LoginOpt, FacebookLoginProvider } from "angularx-social-login";
import { ComponentChangeProfileFacebookComponent } from './components/component-change-profile-facebook/component-change-profile-facebook.component';



const fbLoginOptions: LoginOpt = {
  scope: 'email',
  return_scopes: true,
  enable_profile_selector: true,
  auth_type: 'request'
};


let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("2134431583284588", fbLoginOptions)
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComponentFramesProfileComponent,
    HomeComponent,
    SharedComponent,
    ComponentProfileComponent,
    ComponentChangeProfileFacebookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    AppRoutingModule,
    SocialLoginModule,
    FacebookModule.forRoot(),
    HttpClientModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
