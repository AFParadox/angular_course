import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DUMMY_USERS } from "./dummy-users";
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserName?: string;
  selectedUserId = '';


  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  onSelectUser2(name: string) {
    this.selectedUserName = name;
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)
  }
}
