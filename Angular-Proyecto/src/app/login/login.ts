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
  existe!: any;
  //user$!: Observable<IUser>;
  user!: IUser;
  login() {
    this.UserService.searchUser(this.username,this.password).subscribe(res => {
      this.existe = res;
      //creamos la sesion
      if(this.existe){
        //obtenemos al usuario
        //this.user$ = this.UserService.getUser(this.existe);
        this.UserService.getUser(this.existe).subscribe(res => {
          this.user = res;
          localStorage.setItem('userSession',JSON.stringify(this.user));
        });
      }else{
        //en caso de no obtener al usuario
        document.getElementById('errores')!.textContent = 'Usuario y/o contraseña incorrectos';
      }
      
    });
  }

}
