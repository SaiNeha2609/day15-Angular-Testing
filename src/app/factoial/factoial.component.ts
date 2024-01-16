import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factoial',
  templateUrl: './factoial.component.html',
  styleUrls: ['./factoial.component.css']
})
export class FactoialComponent{

  number: number=0;
  result: number=1;

  calculateFactorial() {
    if (this.number < 0) {
      // Factorial is not defined for negative numbers
      this.result = NaN;
      return;
    }

    // Initialize result to 1, as the factorial of 0 is 1
    this.result = 1;

    // Multiply numbers from 1 to this.number to calculate factorial
    for (let i = 1; i <= this.number; i++) {
      this.result *= i;
    }
  }

}
