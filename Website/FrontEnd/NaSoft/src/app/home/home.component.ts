import { Component, OnInit } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router"
import { Stock } from '../stock.model';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  stocks: Stock[] = []; // Initialize an empty array to hold the list of stocks

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Simulated list of stocks (replace with actual API call)
    stocks: this.stocks= [
      { name: 'ASSURANCES MAGHREBIA', logoUrl: 'path_to_logo', closePrice: 100, change: -2 },
      { name: 'SAM', logoUrl: 'path_to_logo', closePrice: 80, change: 3 },
      { name: 'SANIMED', logoUrl: 'path_to_logo', closePrice: 50, change: 1 },
      { name: 'UNIMED', logoUrl: 'path_to_logo', closePrice: 120, change: -1.5 },
      { name: 'OFFICE PLAST', logoUrl: 'path_to_logo', closePrice: 70, change: 0 },
      { name: 'UADH', logoUrl: 'path_to_logo', closePrice: 90, change: -0.5 },
      { name: 'DELICE HOLDING', logoUrl: 'path_to_logo', closePrice: 110, change: 2 },
      { name: 'MIP', logoUrl: 'path_to_logo', closePrice: 60, change: -1 },
      { name: 'TAWASOL GROUP HOLDING', logoUrl: 'path_to_logo', closePrice: 130, change: 1.2 },
      { name: 'CEREALIS', logoUrl: 'path_to_logo', closePrice: 85, change: -0.7 },
      { name: 'SOTIPAPIER', logoUrl: 'path_to_logo', closePrice: 75, change: 0.8 },
      { name: 'MPBS', logoUrl: 'path_to_logo', closePrice: 95, change: -1.3 },
      { name: 'SAH', logoUrl: 'path_to_logo', closePrice: 105, change: 2.5 },
      { name: 'SOTEMAIL', logoUrl: 'path_to_logo', closePrice: 65, change: -0.9 },
      { name: 'CELLCOM', logoUrl: 'path_to_logo', closePrice: 115, change: 0.6 },
      { name: 'BEST LEASE', logoUrl: 'path_to_logo', closePrice: 55, change: -0.3 },
      { name: 'EURO-CYCLES', logoUrl: 'path_to_logo', closePrice: 125, change: 1.8 },
      { name: 'CITY CARS', logoUrl: 'path_to_logo', closePrice: 75, change: 0 },
      { name: 'NEW BODY LINE', logoUrl: 'path_to_logo', closePrice: 85, change: -0.7 },
      { name: 'ONE TECH HOLDING', logoUrl: 'path_to_logo', closePrice: 95, change: 1.1 },
      { name: 'LAND\'OR', logoUrl: 'path_to_logo', closePrice: 105, change: -2.2 },
      { name: 'Aetech', logoUrl: 'path_to_logo', closePrice: 65, change: 0.3 },
      { name: 'TELNET', logoUrl: 'path_to_logo', closePrice: 115, change: -1.5 },
      { name: 'ENNAKL', logoUrl: 'path_to_logo', closePrice: 75, change: 1.6 },
      { name: 'CARTHAGE CEMENT', logoUrl: 'path_to_logo', closePrice: 135, change: -0.4 },
      { name: 'TUNIS RE', logoUrl: 'path_to_logo', closePrice: 105, change: 0.7 },
      { name: 'CIMENT DE BIZERTE', logoUrl: 'path_to_logo', closePrice: 95, change: -1.2 },
      { name: 'SERVICOM', logoUrl: 'path_to_logo', closePrice: 55, change: 2.3 },
      { name: 'HANNIBAL LEASE', logoUrl: 'path_to_logo', closePrice: 115, change: -0.8 },
      { name: 'ARTES', logoUrl: 'path_to_logo', closePrice: 85, change: 0.1 },
      { name: 'SOPAT', logoUrl: 'path_to_logo', closePrice: 125, change: -2.5 },
      { name: 'TPR', logoUrl: 'path_to_logo', closePrice: 65, change: 1.2 },
      { name: 'ADWYA', logoUrl: 'path_to_logo', closePrice: 105, change: -0.6 },
      { name: 'ESSOUKNA', logoUrl: 'path_to_logo', closePrice: 95, change: 0.5 },
      { name: 'WIFAK INT. BANK', logoUrl: 'path_to_logo', closePrice: 75, change: -1.8 },
      { name: 'SITS', logoUrl: 'path_to_logo', closePrice: 115, change: 2 },
      { name: 'ASSAD', logoUrl: 'path_to_logo', closePrice: 85, change: -0.9 },
      { name: 'GIF', logoUrl: 'path_to_logo', closePrice: 65, change: 0.6 },
      { name: 'SOMOCER', logoUrl: 'path_to_logo', closePrice: 135, change: -0.3 },
      { name: 'BH LEASING', logoUrl: 'path_to_logo', closePrice: 105, change: 1.5 },
      { name: 'SIPHAT', logoUrl: 'path_to_logo', closePrice: 95, change: -2 },
      { name: 'SOTRAPIL', logoUrl: 'path_to_logo', closePrice: 55, change: 1.7 },
      { name: 'ELECTROSTAR', logoUrl: 'path_to_logo', closePrice: 115, change: -0.4 },
      { name: 'ATTIJARI LEASING', logoUrl: 'path_to_logo', closePrice: 75, change: 0.8 },
      { name: 'SIAME', logoUrl: 'path_to_logo', closePrice: 125, change: -1.2 },
      { name: 'SOTUMAG', logoUrl: 'path_to_logo', closePrice: 65, change: 2.4 },
      { name: 'SOTUVER', logoUrl: 'path_to_logo', closePrice: 105, change: -1.3 },
      { name: 'BH ASSURANCE', logoUrl: 'path_to_logo', closePrice: 95, change: 0.9 },
      { name: 'SOTETEL', logoUrl: 'path_to_logo', closePrice: 55, change: -0.5 },
      { name: 'MAGASIN GENERAL', logoUrl: 'path_to_logo', closePrice: 135, change: 1.6 },
      { name: 'STAR', logoUrl: 'path_to_logo', closePrice: 105, change: -2.7 },
      { name: 'POULINA', logoUrl: 'path_to_logo', closePrice: 85, change: 0.2 },
      { name: 'STIP', logoUrl: 'path_to_logo', closePrice: 65, change: -0.9 },
      { name: 'ATL', logoUrl: 'path_to_logo', closePrice: 115, change: 1.3 },
      { name: 'CIL', logoUrl: 'path_to_logo', closePrice: 75, change: -1.4 },
      { name: 'TUNINVEST-SICAR', logoUrl: 'path_to_logo', closePrice: 125, change: 2.1 },
      { name: 'SIMPAR', logoUrl: 'path_to_logo', closePrice: 95, change: -1.8 },
      { name: 'UIB', logoUrl: 'path_to_logo', closePrice: 105, change: 0.5 },
      { name: 'ALKIMIA', logoUrl: 'path_to_logo', closePrice: 55, change: 1 },
      { name: 'ATB', logoUrl: 'path_to_logo', closePrice: 135, change: -0.6 },
      { name: 'AMEN BANK', logoUrl: 'path_to_logo', closePrice: 105, change: 1.9 },
      { name: 'ICF', logoUrl: 'path_to_logo', closePrice: 85, change: -2.3 },
      { name: 'BNA', logoUrl: 'path_to_logo', closePrice: 65, change: 0.4 },
      { name: 'ASTREE', logoUrl: 'path_to_logo', closePrice: 115, change: -1.1 },
      { name: 'STB', logoUrl: 'path_to_logo', closePrice: 75, change: 2.6 },
      { name: 'PLAC.TSIE-SICAF', logoUrl: 'path_to_logo', closePrice: 125, change: -0.2 },
      { name: 'UBCI', logoUrl: 'path_to_logo', closePrice: 95, change: 1.7 },
      { name: 'AIR LIQUIDE', logoUrl: 'path_to_logo', closePrice: 105, change: -1.5 },
      { name: 'BT', logoUrl: 'path_to_logo', closePrice: 55, change: 0.8 },
      { name: 'TUNISIE LEASING', logoUrl: 'path_to_logo', closePrice: 135, change: -1.6 },
      { name: 'BH', logoUrl: 'path_to_logo', closePrice: 105, change: 1.2 },
      { name: 'BIAT', logoUrl: 'path_to_logo', closePrice: 85, change: -2.9 },
      { name: 'ATTIJARI BANK', logoUrl: 'path_to_logo', closePrice: 65, change: 2.3 },
      { name: 'AMS', logoUrl: 'path_to_logo', closePrice: 115, change: -0.7 },
      { name: 'SPDIT-SICAF', logoUrl: 'path_to_logo', closePrice: 75, change: 1.4 },
      { name: 'BTE (ADP)', logoUrl: 'path_to_logo', closePrice: 125, change: -1.8 },
      { name: 'TUNISAIR', logoUrl: 'path_to_logo', closePrice: 95, change: 0.9 },
      { name: 'SFBT', logoUrl: 'path_to_logo', closePrice: 105, change: -0.4 },
      { name: 'MONOPRIX', logoUrl: 'path_to_logo', closePrice: 55, change: 1.1 },
      { name: 'STEQ', logoUrl: 'path_to_logo', closePrice: 135, change: -1.2 },
      { name: 'HEXABYTE', logoUrl: 'path_to_logo', closePrice: 105, change: 0.6 },
      { name: 'TUNISIE VALEURS', logoUrl: 'path_to_logo', closePrice: 85, change: -0.5 },
      { name: 'ELBENE INDUSTRIE', logoUrl: 'path_to_logo', closePrice: 65, change: 0.7 },
      { name: 'SYPHAX Airlines', logoUrl: 'path_to_logo', closePrice: 115, change: -1.8 }
    ];
  }

  // Function to navigate to stock details page
  goToStockDetails(stockName: string): void {
    this.router.navigate(['/stock', stockName]);
  }
}
