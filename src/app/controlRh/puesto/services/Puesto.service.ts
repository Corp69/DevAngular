import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErroresService } from 'src/app/shared/errores.service';
import { MdlPuesto } from '../models/MdlPuesto';


@Injectable({
  providedIn: 'root',
})
export class PuestoService {
  constructor(private http: HttpClient, private errores: ErroresService) { }
  //==================================================================================================
  //guardar
  public GuardarPuesto(modelo: MdlPuesto): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http
      .post(
        `${environment.baseUrl}clientes/ctr/agregar`,
        {
          Qtabla: 'conf_empresa',
          Datos: modelo, 
        },
        { headers: headers }
      )
      .pipe(
        catchError((error) => {
          return throwError(this.errores.getErrores(error));
        })
      );
  }

 
  //===================================================================================================
}
