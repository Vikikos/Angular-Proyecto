import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { IPlate } from '../interfaces/i-plate';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlateService {
  private platesEndpoint = 'http://localhost:3000/dishes';
  constructor(private http: HttpClient) {}

  getplates() : Observable<IPlate[]> {
    //return this.http.get<IPlate[]>(this.platesEndpoint);
    return this.http
    .get<IPlate[]>(this.platesEndpoint)
    .pipe(
      catchError((resp:  HttpErrorResponse) =>
        throwError(() => new Error('Ha dado error puta '))
      )
    )
  }
  getPlatesByCategory(category: string) {
    const params = new HttpParams().set('category', category);
    return this.http.get<IPlate[]>(this.platesEndpoint,{ params });
  }

  addPlate(newPlate: IPlate) : Observable<IPlate>{
    return this.http
    .post<IPlate>(this.platesEndpoint, newPlate)
    .pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(() => new Error(
            `Error obteniendo platos. Código de servidor: ${resp.status}.
            Mensaje: ${resp.message}`
          ),
        ),
      )
    )
  }
  deletePlate(id: string): Observable<IPlate>{
    return this.http
    .delete<IPlate>(`${this.platesEndpoint}/${id}`)
    .pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(() => new Error(
            `Error al eliminar el plato. Código de servidor: ${resp.status}.
            Mensaje: ${resp.message}`
          ),
        ),
      )
    )
  }

  changeEnable(id: string, enabled: boolean) {
    return this.http
    .patch<IPlate>(`${this.platesEndpoint}/${id}`,{enabled})
    .pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(() => new Error(
            `Error al cambiar la visibilidad del plato. Código de servidor: ${resp.status}.
            Mensaje: ${resp.message}`
          ),
        ),
      )
    )
  }
  changePlate(plate :IPlate) : Observable<IPlate>{
    return this.http
    .put<IPlate>(`${this.platesEndpoint}/${plate.id}`, plate)
    .pipe(
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () => new Error(`Error crear producto. Código de servidor: ${resp.status}. Mensaje:${resp.message}`,),
        ),
      ),
    )
  }
  orderPriceAsc()  : Observable<any>{
    return this.http.get<IPlate[]>(this.platesEndpoint)
    .pipe(
      map((plates)=> {
          plates.sort(function(p1,p2) {
            if(p1.price > p2.price) return 1;
            else if(p1.price < p2.price) return -1;
            else return 0;
          })
          return plates;
        } 
      ),
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () => new Error(`Error crear producto. Código de servidor: ${resp.status}. Mensaje:${resp.message}`,),
        ),
      ),
    )
  }
  orderPriceDesc()  : Observable<any>{
    return this.http.get<IPlate[]>(this.platesEndpoint)
    .pipe(
      map((plates)=> {
          plates.sort(function(p1,p2) {
            if(p1.price < p2.price) return 1;
            else if(p1.price > p2.price) return -1;
            else return 0;
          })
          return plates;
        } 
      ),
      catchError((resp: HttpErrorResponse) =>
        throwError(
          () => new Error(`Error crear producto. Código de servidor: ${resp.status}. Mensaje:${resp.message}`,),
        ),
      ),
    )
  }
}
