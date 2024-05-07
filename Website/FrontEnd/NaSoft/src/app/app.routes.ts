import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';


export const routes: Routes = [
    {path:'',redirectTo:"dashboard", pathMatch:"full"},
    {path:'StockList',component: HomeComponent},
    {path:'dashboard',component: DashboardComponent},
    {path:'stock/:name',component : StockDetailComponent},
];
