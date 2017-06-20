import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSanitarioComponent } from './detail-sanitario.component';

describe('DetailSanitarioComponent', () => {
  let component: DetailSanitarioComponent;
  let fixture: ComponentFixture<DetailSanitarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSanitarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
