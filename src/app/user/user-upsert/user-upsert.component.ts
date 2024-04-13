import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css']
})
export class UserUpsertComponent implements OnInit {
  @Input() selectedUser: any;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { 
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  ngOnInit(): void {
    this.dataService.selectedUser$.subscribe(user => {
      this.selectedUser = user;
      if (user) {
        this.userForm.patchValue(user); // Populate form if user exists
      } else {
        this.userForm.reset(); // Clear form if no user selected
      }
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      // Call a method in UserService to handle saving/updating user
      this.dataService.saveOrUpdateUser(userData);
      // Clear the form after submission
      this.userForm.reset();
    }
  }
}
