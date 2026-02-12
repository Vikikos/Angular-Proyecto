import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

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
    )
  }

  searchUser(username: string) : Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.usersEndpoint}/${username}`);
  }
}
