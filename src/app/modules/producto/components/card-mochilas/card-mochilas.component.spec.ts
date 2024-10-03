import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMochilasComponent } from './card-mochilas.component';

describe('CardMochilasComponent', () => {
  let component: CardMochilasComponent;
  let fixture: ComponentFixture<CardMochilasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMochilasComponent]
    });
    fixture = TestBed.createComponent(CardMochilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
