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
    RouterModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  stocks: Stock[] = []; // Initialize an empty array to hold the list of stocks

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Simulated list of stocks (replace with actual API call)
    this.stocks = [
      { id: 1, name: 'Stock A', logoUrl: 'path_to_logo', gainOrLoss: 2.5 },
      { id: 2, name: 'Stock B', logoUrl: 'path_to_logo', gainOrLoss: -1.3 },
      { id: 1, name: 'Stock A', logoUrl: 'path_to_logo', gainOrLoss: 2.5 },
      { id: 2, name: 'Stock B', logoUrl: 'path_to_logo', gainOrLoss: -1.3 },
      { id: 1, name: 'Stock A', logoUrl: 'path_to_logo', gainOrLoss: 2.5 },
      { id: 2, name: 'Stock B', logoUrl: 'path_to_logo', gainOrLoss: -1.3 },
      { id: 1, name: 'Stock A', logoUrl: 'path_to_logo', gainOrLoss: 2.5 },
      { id: 2, name: 'Stock B', logoUrl: 'path_to_logo', gainOrLoss: -1.3 },
      { id: 1, name: 'Stock A', logoUrl: 'path_to_logo', gainOrLoss: 2.5 },
      { id: 2, name: 'Stock B', logoUrl: 'path_to_logo', gainOrLoss: -1.3 },
      // Add more stocks as needed
    ];
  }

  // Function to navigate to stock details page
  goToStockDetails(stockId: number): void {
    this.router.navigate(['/stock', stockId]);
  }
}
