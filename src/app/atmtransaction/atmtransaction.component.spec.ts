import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmtransactionComponent } from './atmtransaction.component';

describe('AtmtransactionComponent', () => {
  let component: AtmtransactionComponent;
  let fixture: ComponentFixture<AtmtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmtransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should withdraw cash successfully', () => {
    component.balance = 1000;
    component.withdraw(500);
    expect(component.balance).toBe(500);
  });

  // atm-transaction.component.spec.ts

it('should handle insufficient funds during withdrawal', () => {
  component.balance = 0;
  component.withdraw(500);
  expect(component.balance).toBe(0); // Assuming a withdrawal of $500 with a balance of $0 should not change the balance
});


  it('should handle non-positive withdrawal amount', () => {
    component.balance = 100;
    component.withdraw(0);
    expect(component.balance).toBe(100);
  });
});
