import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomableBubbleChartComponent } from './zoomable-bubble-chart.component';

describe('ZoomableBubbleChartComponent', () => {
  let component: ZoomableBubbleChartComponent;
  let fixture: ComponentFixture<ZoomableBubbleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoomableBubbleChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoomableBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
