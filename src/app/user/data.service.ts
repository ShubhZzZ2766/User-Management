import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private users: any[] = [];
  private selectedUserSource = new BehaviorSubject<any>(null);
  selectedUser$ = this.selectedUserSource.asObservable();

  constructor() { }

  saveOrUpdateUser(userData: any): void {
    const existingUser = this.users.find(user => user.email === userData.email);
    if (existingUser) {
      // Update user if already exists
      const index = this.users.indexOf(existingUser);
      this.users[index] = userData;
    } else {
      // Generate a unique ID for new user
      const newUserId = Math.random().toString(36).substr(2, 9);
      userData.id = newUserId;
      // Add new user
      this.users.push(userData);
    }
    // Notify about changes in the user list
    this.selectedUserSource.next(null);
  }

  // Method to delete a user
  deleteUser(userId: string): void {
    this.users = this.users.filter(u => u.id !== userId);
    // Notify about changes in the user list
    this.selectedUserSource.next(null);
  }

  // Method to get all users
  getUsers(): any[] {
    return this.users;
  }

  // Method to set selected user
  setSelectedUser(user: any): void {
    this.selectedUserSource.next(user);
  }
}
