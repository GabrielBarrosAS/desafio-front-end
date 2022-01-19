import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './crud/create-user/create-user.component';
import { UpdateUserComponent } from './crud/update-user/update-user.component';
import { DeleteUserComponent } from './crud/delete-user/delete-user.component';
import { RoutingUsers } from './routing/users.routing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [CreateUserComponent, UpdateUserComponent, DeleteUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
  ],
  exports: [CreateUserComponent, UpdateUserComponent, DeleteUserComponent]
})
export class UsersModule { }
