import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  
  isValid: any = true

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  viewTable() {
    this.isValid = true;
  }
  viewStats() {
    this.isValid = false;
  }

}
