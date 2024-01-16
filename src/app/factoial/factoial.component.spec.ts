import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoialComponent } from './factoial.component';

describe('FactoialComponent', () => {
  let component: FactoialComponent;
  let fixture: ComponentFixture<FactoialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate factorial of 5', () => {
    component.number = 5;
    component.calculateFactorial();
    expect(component.result).toBe(120);
  });

  it('should calculate factorial of 0', () => {
    component.number = 0;
    component.calculateFactorial();
    expect(component.result).toBe(1);
  });
});
