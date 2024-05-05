import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Stock {
  id: number;
  name: string;
  logoUrl: string;
  gainOrLoss: number;
}

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  stockId: number = 0; // Initialize stockId
  stock: Stock | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.stockId = +idParam; // Extract the stock ID from route parameters
      this.loadStockDetails(); // Load stock details based on the ID
    } else {
      // Handle the case where the 'id' parameter is not available
    }
  }

  loadStockDetails(): void {
    // Simulated stock data
    const stocks: Stock[] = [
      { id: 1, name: 'Stock A', logoUrl: 'path_to_logo', gainOrLoss: 2.5 },
      { id: 2, name: 'Stock B', logoUrl: 'path_to_logo', gainOrLoss: -1.3 },
      // Add more stocks as needed
    ];

    // Find the stock with matching ID
    this.stock = stocks.find(stock => stock.id === this.stockId);
  }
}
