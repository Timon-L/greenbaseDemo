import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [MatSidenavModule, RouterOutlet, MatListModule, RouterLink, MatIconModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {

}
