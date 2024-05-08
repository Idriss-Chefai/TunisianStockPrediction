import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStockChartComponent } from './live-stock-chart.component';

describe('LiveStockChartComponent', () => {
  let component: LiveStockChartComponent;
  let fixture: ComponentFixture<LiveStockChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveStockChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveStockChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
