import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUser } from '../interfaces/i-user';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersEndpoint = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  getUsers() : Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersEndpoint) 
    .pipe(
      catchError((res: HttpErrorResponse) =>
        throwError(() => new Error('Error - No se han podido obtener los usuarios '))
      )
    );
  }

  searchUser(userName: string, pass: string): Observable<any> {
    return this.http.get<any[]>(this.usersEndpoint)
    .pipe(
      map(users =>{
        //comprobamos si existe
        const user = users.find(u =>  u.username == userName && u.password == pass);
        //En funcion de si existe o no devolvera o el id del usuario en cuenstio o false
        return user ? user.id : false;
      })
    );
  }
  getUser(userId: string): Observable<IUser>{
    //obtenemos solo un usuario
    return this.http.get<IUser>(`${this.usersEndpoint}/${userId}`)
    .pipe(
      catchError((res: HttpErrorResponse) =>
        throwError(() => new Error('Error - No se ha podido econtrar al usuario ' + res.status))
      )
    );
  } 
}
