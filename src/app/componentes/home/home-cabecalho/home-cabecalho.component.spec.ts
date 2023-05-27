import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCabecalhoComponent } from './home-cabecalho.component';

describe('HomeCabecalhoComponent', () => {
  let component: HomeCabecalhoComponent;
  let fixture: ComponentFixture<HomeCabecalhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCabecalhoComponent]
    });
    fixture = TestBed.createComponent(HomeCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
