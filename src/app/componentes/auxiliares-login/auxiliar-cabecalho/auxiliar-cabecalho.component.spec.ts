import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarCabecalhoComponent } from './auxiliar-cabecalho.component';

describe('AuxiliarCabecalhoComponent', () => {
  let component: AuxiliarCabecalhoComponent;
  let fixture: ComponentFixture<AuxiliarCabecalhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuxiliarCabecalhoComponent]
    });
    fixture = TestBed.createComponent(AuxiliarCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
