import { Component, Input, Output, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();  // type specification is not required as we can emit any type of data, but specifying will ensure that only what we want will work

  @Output() select2 = new EventEmitter<string>();


  // with signals
  /* id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();  */ // (new function) output doesnt use signals, but is a usefuls alternative to EventEmitter if we dont want any decorators

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id); 
    this.select2.emit(this.name);
  }
}
