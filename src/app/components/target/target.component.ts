import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.sass']
})
export class TargetComponent implements OnInit {
  urlAmbiente:string = "../.../../assets/images/ambiente.svg";
  urlQualita:string = "../.../../assets/images/qualita.svg";
  urlSicurezza:string = "../.../../assets/images/sicurezza.svg";

  constructor() { }

  ngOnInit() {
  }

}
