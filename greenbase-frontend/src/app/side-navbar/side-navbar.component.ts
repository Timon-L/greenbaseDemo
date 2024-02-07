import { Component, ViewChild, AfterViewInit, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { UserData } from '../user-data.model';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [MatSidenavModule, RouterOutlet, RouterLinkActive, MatListModule, RouterLink, MatIconModule, MatBadgeModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent implements AfterViewInit, OnInit{
  userData: UserData = new UserData();
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private observer: BreakpointObserver, private userDataService: UserDataService) {}

  ngAfterViewInit() {
    this.observer.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      if (result.matches) {
        this.drawer.mode = 'over';
        this.drawer.close();
      } else {
        this.drawer.mode = 'side';
        this.drawer.open();
      }
    });
  }

  ngOnInit() {
    this.userDataService.currentUserData.subscribe(data => this.userData = data);
  }
}
