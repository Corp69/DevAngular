import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErroresService } from 'src/app/shared/errores.service';
import { MdlPaciente } from '../Models/MdlPaciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(
    private http: HttpClient,
    private errores: ErroresService) { }

  public lstEstatus(): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http
      .post(`${environment.baseUrl}clientes/conf/funciones`,
        {
          "ExSchema": "Config",
          "funcion": "_listado_filtro_estatus"
        },
        { headers: headers })
      .pipe(
        catchError(error => {
          return throwError(this.errores.getErrores(error));
        })
      );
  }

    //listado para sexo
    public listSexo(): Observable<any> {
      let headers = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      });
      return this.http
        .post(
          `${environment.baseUrl}clientes`,
          {
            Qtabla: 'cg_sexo',
          },
          { headers: headers }
        )
        .pipe(
          catchError((error) => {
            return throwError(this.errores.getErrores(error));
          })
        );
    }


  public Guardar(modelo: MdlPaciente ): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http
      .post(
        `${environment.baseUrl}clientes/ctr/agregar`,
        {
          Qtabla: 'hos_paciente',
          Datos: modelo ,
        },
        { headers: headers }
      )
      .pipe(
        catchError((error) => {
          return throwError(this.errores.getErrores(error));
        })
      );
  }



}