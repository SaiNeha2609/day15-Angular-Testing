import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armstrong',
  templateUrl: './armstrong.component.html',
  styleUrls: ['./armstrong.component.css']
})
export class ArmstrongComponent{

  number: number = 0; // Provide an initializer
  isArmstrong: boolean = false; // Provide an initializer

  checkArmstrong() {
    const numStr = this.number.toString();
    const numDigits = numStr.length;

    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numStr[i], 10);
      sum += Math.pow(digit, numDigits);
    }

    // Check if the sum is equal to the original number
    this.isArmstrong = sum === this.number;
  }
}
