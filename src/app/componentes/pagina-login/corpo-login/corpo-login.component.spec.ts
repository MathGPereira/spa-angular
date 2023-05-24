import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoLoginComponent } from './corpo-login.component';

describe('CorpoLoginComponent', () => {
  let component: CorpoLoginComponent;
  let fixture: ComponentFixture<CorpoLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorpoLoginComponent]
    });
    fixture = TestBed.createComponent(CorpoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
