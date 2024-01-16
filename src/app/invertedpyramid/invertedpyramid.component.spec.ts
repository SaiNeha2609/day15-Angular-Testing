import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedpyramidComponent } from './invertedpyramid.component';

describe('InvertedpyramidComponent', () => {
  let component: InvertedpyramidComponent;
  let fixture: ComponentFixture<InvertedpyramidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertedpyramidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvertedpyramidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate inverted pyramid rows', () => {
    component.rows = [5, 4, 3, 2, 1];
    fixture.detectChanges();
    const rows = fixture.nativeElement.querySelectorAll('.row');
    expect(rows.length).toBe(5);
  });
});
