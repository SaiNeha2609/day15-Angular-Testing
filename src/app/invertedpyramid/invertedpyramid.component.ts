import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invertedpyramid',
  templateUrl: './invertedpyramid.component.html',
  styleUrls: ['./invertedpyramid.component.css']
})
export class InvertedpyramidComponent {

  rows: number[]=[];

  getNumbers(rowNumber: number): number[] {
    return Array.from({ length: rowNumber }, (_, index) => index + 1).reverse();
  }

}
