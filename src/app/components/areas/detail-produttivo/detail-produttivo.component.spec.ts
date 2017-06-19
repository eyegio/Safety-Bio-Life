import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProduttivoComponent } from './detail-produttivo.component';

describe('DetailProduttivoComponent', () => {
  let component: DetailProduttivoComponent;
  let fixture: ComponentFixture<DetailProduttivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProduttivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProduttivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
