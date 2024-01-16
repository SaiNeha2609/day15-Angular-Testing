import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmstrongComponent } from './armstrong.component';

describe('ArmstrongComponent', () => {
  let component: ArmstrongComponent;
  let fixture: ComponentFixture<ArmstrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmstrongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmstrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if an Armstrong number', () => {
    component.number = 153;
    component.checkArmstrong();
    expect(component.isArmstrong).toBe(true);
  });

  it('should check if not an Armstrong number', () => {
    component.number = 123;
    component.checkArmstrong();
    expect(component.isArmstrong).toBe(false);
  });
});
