import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRodapeComponent } from './home-rodape.component';

describe('HomeRodapeComponent', () => {
  let component: HomeRodapeComponent;
  let fixture: ComponentFixture<HomeRodapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRodapeComponent]
    });
    fixture = TestBed.createComponent(HomeRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
