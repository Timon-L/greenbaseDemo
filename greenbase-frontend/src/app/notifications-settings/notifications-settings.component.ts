import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-notifications-settings',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './notifications-settings.component.html',
  styleUrl: './notifications-settings.component.scss'
})
export class NotificationsSettingsComponent {

}
