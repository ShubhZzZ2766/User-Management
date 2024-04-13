import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserUpsertComponent, UserListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [UserUpsertComponent, UserListComponent]
})
export class UserModule { }
