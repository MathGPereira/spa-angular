import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensErroComponent } from './mensagens-erro.component';

describe('MensagensErroComponent', () => {
  let component: MensagensErroComponent;
  let fixture: ComponentFixture<MensagensErroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensagensErroComponent]
    });
    fixture = TestBed.createComponent(MensagensErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
