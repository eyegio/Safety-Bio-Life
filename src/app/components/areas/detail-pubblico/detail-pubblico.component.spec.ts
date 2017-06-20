import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPubblicoComponent } from './detail-pubblico.component';

describe('DetailPubblicoComponent', () => {
  let component: DetailPubblicoComponent;
  let fixture: ComponentFixture<DetailPubblicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPubblicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPubblicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
