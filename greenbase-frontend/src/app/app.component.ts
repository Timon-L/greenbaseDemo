import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavbarComponent} from './side-navbar/side-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavbarComponent, SideNavbarComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'greenbase-frontend';
}
