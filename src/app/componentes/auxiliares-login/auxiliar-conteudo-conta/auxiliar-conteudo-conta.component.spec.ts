import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarConteudoContaComponent } from './auxiliar-conteudo-conta.component';

describe('AuxiliarConteudoContaComponent', () => {
  let component: AuxiliarConteudoContaComponent;
  let fixture: ComponentFixture<AuxiliarConteudoContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuxiliarConteudoContaComponent]
    });
    fixture = TestBed.createComponent(AuxiliarConteudoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
