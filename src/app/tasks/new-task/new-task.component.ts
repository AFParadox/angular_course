import { Component, EventEmitter, Output } from '@angular/core';
import { type Task } from "../task/task.model";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() newTask = new EventEmitter<boolean>();
  @Output() newTaskObj = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();
  tempTask?: Task;

  // onConfirmNewTask() {
  //   // this.tempTask.title = document.getElementById("title").value;
  //   this.newTask.emit(false);
  //   this.newTaskObj.emit(this.tempTask);
  // }

  onCancel() {
    this.cancel.emit();
  }
}
