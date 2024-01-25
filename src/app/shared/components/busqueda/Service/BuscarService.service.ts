import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErroresService } from 'src/app/shared/errores.service';

@Injectable({
  providedIn: 'root',
})
export class BuscarService {
  constructor(private http: HttpClient, private errores: ErroresService) { }
 
  public Buscar( _schema: any, _funcion: any, JsonFrm: any ): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(`${environment.baseUrl}clientes/ctr/schema`,
      {
        "ExSchema": _schema,
        "funcion":  _funcion,
        "data": {
          "_fechainicial": JsonFrm.fechainicia,
          "_fechafinal":   JsonFrm.fechatermina,
          "_activo":       JsonFrm.id_estatus
        }
      }
      ,
      { headers: headers }
    ).pipe(
      catchError((error) => {
        return throwError(this.errores.getErrores(error));
      })
    );
  }

  //===================================================================================================
  public listEstatus(): Observable<any> {
    let headers = new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem('token')}`,});
    return this.http.post(`${environment.baseUrl}clientes/crt/list`,
      { Qtabla: 'app_estatus', },
      { headers: headers }
    ).pipe(catchError((error) => {
        return throwError(this.errores.getErrores(error));
      })
    );
  }




}
