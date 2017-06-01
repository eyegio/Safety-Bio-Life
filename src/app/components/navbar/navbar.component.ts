import { Component, OnInit } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public navToggle: boolean = false;

  constructor() {
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultDuration = 800;
  }

  ngOnInit() { }

  toggleNav(){
    this.navToggle = !this.navToggle;
  }
}

