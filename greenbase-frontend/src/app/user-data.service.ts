import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from './user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userDataSource = new BehaviorSubject<UserData>({
    name: 'Alex Smith',
    email: 'AlexSmith@gmail.com',
    notifications: 10,
    imageUrl: './assets/avataaars.png',
    orders: 16
  });
  currentUserData = this.userDataSource.asObservable();

  constructor() { }

  updateUserData(data: UserData) {
    this.userDataSource.next(data);
  }

  logout() {
    this.userDataSource.next({
      name: '',
      email: '',
      notifications: 0,
      imageUrl: '',
      orders: 0
    });
  }
}


