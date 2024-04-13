import { Component } from '@angular/core';
import { DataService } from './user/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUser: any;  

  constructor( public dataService: DataService) {}

  onUserSelected(user: any): void {
    this.dataService.setSelectedUser(user); // Set user in DataService
  }
}
