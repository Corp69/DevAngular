import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErroresService } from 'src/app/shared/errores.service';
import { MdlBuscarPacientes } from '../Models/MdlBuscarPacientes';
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

  public PacientesXFecha(modelo: MdlBuscarPacientes): Observable<any> {
    let  headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http
      .post(`${environment.baseUrl}/clientes/exce/schema`,
      {
        "ExSchema": "nutri",
        "funcion": "tb_pacientes_por_fecha_limite",
        "data": modelo
      },
        { headers: headers })
      .pipe(
        catchError(error => {
          return throwError(this.errores.getErrores(error));
        })
      );
     }
}