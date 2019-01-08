import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'robu-web';
  constructor() {
    this.configFirebase();
  }
  configFirebase() {
    const config = {
      apiKey: 'AIzaSyDazJXztjj-5VcdZPt3ueRS_sv6e9lQm8Q',
      authDomain: 'rabu-love-love.firebaseapp.com',
      databaseURL: 'https://rabu-love-love.firebaseio.com',
      projectId: 'rabu-love-love',
      storageBucket: 'rabu-love-love.appspot.com',
      messagingSenderId: '69927117585'
    };
    firebase.initializeApp(config);
  }
}
