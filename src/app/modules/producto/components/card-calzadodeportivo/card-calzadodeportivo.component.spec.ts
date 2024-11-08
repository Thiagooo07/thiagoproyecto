import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCalzadodeportivoComponent } from './card-calzadodeportivo.component';

describe('CardCalzadodeportivoComponent', () => {
  let component: CardCalzadodeportivoComponent;
  let fixture: ComponentFixture<CardCalzadodeportivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCalzadodeportivoComponent]
    });
    fixture = TestBed.createComponent(CardCalzadodeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
