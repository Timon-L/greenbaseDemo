import { Component, Input, HostListener, ViewChild, Host } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { UserData } from '../user-data.model';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuTrigger } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, CommonModule, MatBadgeModule, MatMenuTrigger],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent{
  @Input() userData!: UserData;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(this.trigger) {
      this.trigger.closeMenu();
    }
  }

  constructor(private userDataService: UserDataService) { }

  public logout() {
    this.userDataService.logout();
  }
}
