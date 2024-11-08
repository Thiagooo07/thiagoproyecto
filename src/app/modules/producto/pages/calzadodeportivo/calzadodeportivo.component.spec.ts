import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalzadodeportivoComponent } from './calzadodeportivo.component';

describe('CalzadodeportivoComponent', () => {
  let component: CalzadodeportivoComponent;
  let fixture: ComponentFixture<CalzadodeportivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalzadodeportivoComponent]
    });
    fixture = TestBed.createComponent(CalzadodeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
