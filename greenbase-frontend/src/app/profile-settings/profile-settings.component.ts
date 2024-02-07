import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { UserData } from '../user-data.model';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDivider } from '@angular/material/divider';

interface SelectOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, NgxDropzoneModule, ReactiveFormsModule, MatSelectModule, MatInputModule, MatDivider],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.scss'
})
export class ProfileSettingsComponent implements OnInit{
  fileCtrl = new FormControl();
  imageSrc: string | ArrayBuffer | null = null;
  userData: UserData = new UserData();
  profileForm: FormGroup;

  files: File[] = [];

  timezones: SelectOption[] = [
    { value: 'UTC-12:00', viewValue: '(UTC-12:00) International Date Line West' },
    { value: 'UTC-11:00', viewValue: '(UTC-11:00) Coordinated Universal Time-11' },
    { value: 'UTC-10:00', viewValue: '(UTC-10:00) Hawaii' },
    { value: 'UTC-09:00', viewValue: '(UTC-09:00) Alaska' },
    { value: 'UTC+00:00', viewValue: '(UTC+00:00) Greenwich Mean Time' },
    { value: 'UTC+01:00', viewValue: '(UTC+01:00) Central European Time' },
    { value: 'UTC+02:00', viewValue: '(UTC+02:00) Eastern European Time' },
  ];

  languages: SelectOption[] = [
    { value: 'en', viewValue: 'English' },
    { value: 'es', viewValue: 'Spanish' },
    { value: 'fr', viewValue: 'French' },
    { value: 'de', viewValue: 'German' },
    { value: 'it', viewValue: 'Italian' },
    { value: 'ru', viewValue: 'Russian' },
  ];

  constructor(private userDataService: UserDataService) {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      timezone: new FormControl(''),
      language: new FormControl(''),
    });
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const savedImage = localStorage.getItem('profileImage');
      if (savedImage) {
        this.imageSrc = savedImage;
      }
    }
    this.userDataService.currentUserData.subscribe((data: UserData) => {
      this.profileForm.patchValue(data);
      if (data.imageUrl) {
        this.imageSrc = data.imageUrl;
      }
    });
  }

  onSelect(event: any): void {
    const file = event.addedFiles[0];
    if (file) {
      this.imageSrc = this.createObjectURL(file);
    }
  }

  createObjectURL(file: File): string | ArrayBuffer {
    const url = URL.createObjectURL(file);
    return url;
  }

  triggerFileInput(dropzone: any): void {
    const fileInput = dropzone.element.nativeElement.querySelector('input[type="file"]');
    fileInput?.click();
  }

  onRemove(file: File): void {
    this.files = this.files.filter(f => f !== file);
    if (file === this.files[0]) {
      this.clear();
    }
  }

  clear(): void {
    this.imageSrc = null;
  }


  saveSettings(): void {
    const updatedUserData: UserData = {
      ...this.profileForm.value,
      imageUrl: typeof this.imageSrc === 'string' ? this.imageSrc : undefined,
    };
    this.userDataService.updateUserData(updatedUserData);
    alert('Profile settings updated successfully.');
  }

  logout(): void {
    this.userDataService.logout();
    this.profileForm.reset();
    this.imageSrc = null;
  }
}
