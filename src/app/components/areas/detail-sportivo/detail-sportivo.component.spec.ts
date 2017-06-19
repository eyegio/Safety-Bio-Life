import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSportivoComponent } from './detail-sportivo.component';

describe('DetailSportivoComponent', () => {
  let component: DetailSportivoComponent;
  let fixture: ComponentFixture<DetailSportivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSportivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
