import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErroresService } from 'src/app/shared/errores.service';
import { MdlDepartamento } from '../models/MdlDepartamento';




@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  constructor(private http: HttpClient, private errores: ErroresService) { }
  //==================================================================================================
  //guardar
  public GuardarDepartamento(modelo: MdlDepartamento): Observable<any> {
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
