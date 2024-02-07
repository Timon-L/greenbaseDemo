import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserDataService } from '../user-data.service';
import { UserData } from '../user-data.model';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { BrandingComponent } from '../branding/branding.component';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, UserProfileComponent, BrandingComponent],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss'
})
export class TopNavbarComponent implements OnInit{
  userData: UserData = new UserData();

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.currentUserData.subscribe(data => this.userData = data);
  }
}
