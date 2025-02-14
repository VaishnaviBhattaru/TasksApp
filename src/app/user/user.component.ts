import { Component, EventEmitter, Input, Output, signal} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
// import { DUMMY_USERS } from '../dummy-users';

// const randIdx = Math.floor(Math.random()*DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input ({required: true}) selected!: boolean;
  @Input ({required: true}) user!: User;
  @Output() select = new EventEmitter();
  // selectedUser = signal(DUMMY_USERS[randIdx])
  // imagePath = computed(()=> 'assets/users/'+this.selectedUser().avatar)

  get imagePath(){
    return `assets/users/${this.user.avatar}`
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
