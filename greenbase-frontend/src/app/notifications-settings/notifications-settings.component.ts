import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notifications-settings',
  standalone: true,
  imports: [MatListModule, MatSlideToggleModule, FormsModule],
  templateUrl: './notifications-settings.component.html',
  styleUrl: './notifications-settings.component.scss'
})
export class NotificationsSettingsComponent {
  settings = [
    {
      name: 'Personalized Offers',
      description: 'Receive offers made special for you',
      enabled: true
    },
    {
      name: 'Online Webinars',
      description: 'Get notified about upcoming webinars',
      enabled: true
    },
    {
      name: 'New Features',
      description: 'Updates about new features and product releases',
      enabled: true
    },
    {
      name: 'Security and Billing',
      description: 'Account security and notifications about billing',
      enabled: true
    },
    {
      name: 'Marketing',
      description: 'Receive marketing newsletters about our new products',
      enabled: true
    }
  ];

  toggleSetting(setting: any) {
    setting.enabled = !setting.enabled;
  }
}
