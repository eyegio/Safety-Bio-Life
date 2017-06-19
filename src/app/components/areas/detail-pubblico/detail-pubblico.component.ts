import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';


@Component({
  selector: 'app-detail-pubblico',
  templateUrl: './detail-pubblico.component.html',
  styleUrls: ['./detail-pubblico.component.sass'],
  animations: [
    trigger('rotateAnimation', [
      state('inactive', style({
        transform: 'rotate(0deg)'
      })),
      state('active', style({
        transform: 'rotate(360deg)'
      })),
      transition('inactive <=> active', animate('400ms ease'))
    ])
  ]
})
export class DetailPubblicoComponent implements OnInit {  
  state: string = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  animateMe(){
    this.state = (this.state === "inactive" ? "active" : "inactive");
  }

}
