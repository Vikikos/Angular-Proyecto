import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { IPlate } from '../interfaces/i-plate';


@Injectable({
  providedIn: 'root',
})
export class PlateService {
  private platesEndpoint = 'http://localhost:3000/dishes';
  constructor(private http: HttpClient) {}

  getplates() : Observable<IPlate[]> {
    return this.http.get<IPlate[]>(this.platesEndpoint);
    // return this.http
    // .get<IPlate[]>(this.platesEndpoint)
    // .pipe(
    //   catchError((resp:  HttpErrorResponse) =>
    //     throwError(() => new Error('Ha dado error puta '))
    //   )
    // )
  }
  getPlatesByCategory(category: string) {
    const params = new HttpParams().set('category', category);
    return this.http.get<IPlate[]>(this.platesEndpoint,{ params });
  }

  addPlate(newPlate: IPlate) {
    return this.http
    .post(this.platesEndpoint, newPlate)
    .pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(() => new Error('Error al añadir el plato')),
      ),
    );
  }
}
