import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  @Output() selectedUser = new EventEmitter<any>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }

  editUser(user: any): void {
    this.selectedUser.emit(user); // Emit selected user
  }

  deleteUser(userId: string): void {
    this.dataService.deleteUser(userId);
    this.users = this.dataService.getUsers();
  }
}
