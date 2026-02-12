import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, toArray } from 'rxjs';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/i-user';

@Component({
  selector: 'login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  usersArray: IUser[] = [];
  users$: Observable<IUser[]>;
  constructor(private UserService: UserService) {
    this.users$ = this.UserService.getUsers();
  }
  login() {
    
  }
}
