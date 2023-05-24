import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoLoginComponent } from './cabecalho-login.component';

describe('CabecalhoLoginComponent', () => {
  let component: CabecalhoLoginComponent;
  let fixture: ComponentFixture<CabecalhoLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabecalhoLoginComponent]
    });
    fixture = TestBed.createComponent(CabecalhoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
