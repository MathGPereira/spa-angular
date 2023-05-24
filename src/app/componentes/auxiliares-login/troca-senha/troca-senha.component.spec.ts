import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaSenhaComponent } from './troca-senha.component';

describe('TrocaSenhaComponent', () => {
  let component: TrocaSenhaComponent;
  let fixture: ComponentFixture<TrocaSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrocaSenhaComponent]
    });
    fixture = TestBed.createComponent(TrocaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
