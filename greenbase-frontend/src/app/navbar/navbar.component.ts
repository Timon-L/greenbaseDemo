import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchBarComponent,IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
