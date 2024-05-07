import { Component } from '@angular/core';
import { ZoomableBubbleChartComponent } from '../zoomable-bubble-chart/zoomable-bubble-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ZoomableBubbleChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

        // Set data
        data: any[] = [
          {
            "title": "Afghanistan",
            "id": "AF",
            "color": "#eea638",
            "continent": "asia",
            "x": 1349.69694102398,
            "y": 60.524,
            "value": 33397058
          },
          {
            "title": "Albania",
            "id": "AL",
            "color": "#d8854f",
            "continent": "europe",
            "x": 6969.30628256456,
            "y": 77.185,
            "value": 3227373
          },
          {
            "title": "Algeria",
            "id": "DZ",
            "color": "#de4c4f",
            "continent": "africa",
            "x": 6419.12782939372,
            "y": 70.874,
            "value": 36485828
          },
          {
            "title": "Angola",
            "id": "AO",
            "color": "#de4c4f",
            "continent": "africa",
            "x": 5838.15537582502,
            "y": 51.498,
            "value": 20162517
          },
          {
            "title": "Argentina",
            "id": "AR",
            "color": "#86a965",
            "continent": "south_america",
            "x": 15714.1031814398,
            "y": 76.128,
            "value": 41118986
          },
          {
            "title": "Armenia",
            "id": "AM",
            "color": "#d8854f",
            "continent": "europe",
            "x": 5059.0879636443,
            "y": 74.469,
            "value": 3108972
          },
        ];
}
