import { Component } from '@angular/core';
import { NotificationsSettingsComponent } from '../notifications-settings/notifications-settings.component';
import { AccountSettingsComponent } from '../account-settings/account-settings.component';
import { SecuritySettingsComponent } from '../security-settings/security-settings.component';
import { ProfileSettingsComponent } from '../profile-settings/profile-settings.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-personal-settings',
  standalone: true,
  imports: [NotificationsSettingsComponent, AccountSettingsComponent, SecuritySettingsComponent, ProfileSettingsComponent, MatTabsModule, MatDividerModule],
  templateUrl: './personal-settings.component.html',
  styleUrl: './personal-settings.component.scss'
})
export class PersonalSettingsComponent {

}
