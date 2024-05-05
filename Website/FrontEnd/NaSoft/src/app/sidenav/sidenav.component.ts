import { Component } from '@angular/core';
import {MatListModule} from "@angular/material/list";
import { MatIconModule } from '@angular/material/icon';
import {RouterModule} from '@angular/router'
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

}
