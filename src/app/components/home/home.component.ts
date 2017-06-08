import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { trigger, state, animate, transition, style } from '@angular/core';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('loginAnimate', [
      state('*', style({
        '-ms-transform': 'translate3D(0px, 0px, 0px)',
        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
        '-moz-transform': 'translate3D(0px, 0px, 0px)',
        '-o-transform':'translate3D(0px, 0px, 0px)',
        transform:'translate3D(0px, 0px, 0px)',
        opacity: 1})),
        transition('void => *', [
            style({opacity: 0,
                '-ms-transform': 'translate3D(0px, 150px, 0px)',
                '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                '-moz-transform': 'translate3D(0px, 150px, 0px)',
                '-o-transform':'translate3D(0px, 150px, 0px)',
                transform:'translate3D(0px, 150px, 0px)',
            }),
            animate('0.3s 0.75s ease-out')
        ])
    ])
]
})
export class HomeComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private modalService: NgbModal,
    public authService: AuthService) {
  }

  ngOnInit() {
  }

  open() {
    console.log("trying to open");
    const modalRef = this.modalService.open(LoginComponent);
  }

}

