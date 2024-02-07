import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [MatSidenavModule, RouterOutlet, MatListModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {

}
