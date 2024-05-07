import { Component } from '@angular/core';
import { RouterOutlet , RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ZoomableBubbleChartComponent } from './zoomable-bubble-chart/zoomable-bubble-chart.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    DashboardComponent,
  ZoomableBubbleChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NaSoft';
}
