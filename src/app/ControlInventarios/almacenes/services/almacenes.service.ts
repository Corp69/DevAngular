import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErroresService } from 'src/app/shared/errores.service';
import { MdlAlmacen } from '../models/MdlAlmacen';



@Injectable({
  providedIn: 'root',
})
export class AlmacenService {
  constructor(private http: HttpClient, private errores: ErroresService) { }
  //==================================================================================================
  //guardar
  public GuardarAlmacen(modelo: MdlAlmacen): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http
      .post(
        `${environment.baseUrl}clientes/ctr/agregar`,
        {
          Qtabla: 'inv_almacen',
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
  //?       Listados: Proveedor 
  /**
   * 
   * @returns  Json Array clasificacion de proveedor
   */
  public listProveedorClasificacion(): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(`${environment.baseUrl}clientes`,
      {
        Qtabla: 'proveedor_clasificacion',
      },
      { headers: headers }
    ).pipe(
        catchError((error) => {
          return throwError(this.errores.getErrores(error));
        })
      );
  }

  /**
   * 
   * @returns Json Array Estatus de proveedor
   */
  public listProveedorEstatus(): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(`${environment.baseUrl}clientes`,
      {
        Qtabla: 'proveedor_estatus',
      },
      { headers: headers }
    ).pipe(
        catchError((error) => {
          return throwError(this.errores.getErrores(error));
        })
      );
  }
  
  /**
   * 
   * @returns Json Array Operacion de proveedor
   */
  public listProveedorOperacion(): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(`${environment.baseUrl}clientes`,
      {
        Qtabla: 'proveedor_operacion',
      },
      { headers: headers }
    ).pipe(
        catchError((error) => {
          return throwError(this.errores.getErrores(error));
        })
      );
  }

  /**
   * 
   * @returns Json Array Tipo  de proveedor
   */
  public listProveedorTipo(): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(`${environment.baseUrl}clientes`,
      {
        Qtabla: 'proveedor_tipo',
      },
      { headers: headers }
    ).pipe(
        catchError((error) => {
          return throwError(this.errores.getErrores(error));
        })
      );
  }
  //===================================================================================================
}
