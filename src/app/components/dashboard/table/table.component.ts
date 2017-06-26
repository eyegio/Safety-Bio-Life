import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes, group } from '@angular/core';
import { SblService } from '../../../sbl.service';
import { AuthService } from './../../../auth.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
  providers: [SblService],
  animations: [
      trigger('cardstats', [
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
                    animate('0.3s 0.25s ease-out')
                ])
        ]),
    ]
})
export class TableComponent implements OnInit {
    tables = [];
    errorTable: string;
    p: number = 1;

  constructor(
    private _sblService: SblService,
    public authService: AuthService) { }

  ngOnInit() {
    this._sblService.getTables()
    .subscribe(resTableData => this.tables = resTableData,
               resTableError => this.errorTable = resTableError)
  }

}
