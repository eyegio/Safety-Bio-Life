import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  public articleName;
 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let name = this.route.snapshot.params['name'];
    this.articleName = name;
  }
}

  


