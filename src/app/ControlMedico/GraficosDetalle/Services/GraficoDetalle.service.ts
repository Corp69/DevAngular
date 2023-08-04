import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErroresService } from 'src/app/shared/errores.service';

@Injectable({
  providedIn: 'root'
})
export class GraficoDetalleService {

  constructor(
    private http: HttpClient,
    private errores: ErroresService) { }

  public _tablasServicios(): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http
      .post(`${environment.baseUrl}clientes/exce/schema`,
        {
          "ExSchema": "Config",
          "funcion": "_app_Graficas_Detalle_X_Empleado",
          "data": {
            '_ID_EMPLEADO': `${localStorage.getItem('id')}`,
            '_ID_TITULO': `1}`
          }
        },
        { headers: headers })
      .pipe(
        catchError(error => {
          return throwError(this.errores.getErrores(error));
        })
      );
  }
}