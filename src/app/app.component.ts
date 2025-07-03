import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import { TasksComponent } from "./tasks/tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type Task } from "./tasks/task/task.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserName?: string;
  selectedUserId = '';
  newTask = false;
  @Output() tempTask = new EventEmitter<Task>();


  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  onSelectUser2(name: string) {
    this.selectedUserName = name;
  }

  onNewTask(flag: boolean) {
    this.newTask = flag;
  }

  onConfirmNewTask(new_and_original_task: Task){
    this.tempTask.emit(new_and_original_task);
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)
  }
}
