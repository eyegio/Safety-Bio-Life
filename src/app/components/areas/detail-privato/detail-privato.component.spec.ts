import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPrivatoComponent } from './detail-privato.component';

describe('DetailPrivatoComponent', () => {
  let component: DetailPrivatoComponent;
  let fixture: ComponentFixture<DetailPrivatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPrivatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPrivatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
