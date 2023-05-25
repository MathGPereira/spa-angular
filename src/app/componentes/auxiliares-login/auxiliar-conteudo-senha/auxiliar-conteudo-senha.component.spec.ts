import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarConteudoSenhaComponent } from './auxiliar-conteudo-senha.component';

describe('AuxiliarConteudoSenhaComponent', () => {
  let component: AuxiliarConteudoSenhaComponent;
  let fixture: ComponentFixture<AuxiliarConteudoSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuxiliarConteudoSenhaComponent]
    });
    fixture = TestBed.createComponent(AuxiliarConteudoSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
