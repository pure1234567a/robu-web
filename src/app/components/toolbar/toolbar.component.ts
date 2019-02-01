import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  isMenuIcon = true;
  @HostListener('window:resize') onResize() {
    this.onResizeDisplay();
  }

  constructor
    (

    ) {
    this.onResizeDisplay();
  }

  data: any;
  checkUser: Boolean = false;

  ngOnInit() {
  }

  async ngDoCheck() {
    if (!this.checkUser) {
      this.checkUser = true
      const user = window.localStorage.getItem('@user');
      if (user) {
        console.log(JSON.parse(user));
        this.data = JSON.parse(user);
      }
    }

  }

  onResizeDisplay() {
    if (window.innerWidth > 800) {
      this.isMenuIcon = false;
    } else {
      this.isMenuIcon = true;
    }
  }

}

