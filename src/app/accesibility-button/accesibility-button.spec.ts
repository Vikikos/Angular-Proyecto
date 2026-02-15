import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesibilityButton } from './accesibility-button';

describe('AccesibilityButton', () => {
  let component: AccesibilityButton;
  let fixture: ComponentFixture<AccesibilityButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesibilityButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesibilityButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
