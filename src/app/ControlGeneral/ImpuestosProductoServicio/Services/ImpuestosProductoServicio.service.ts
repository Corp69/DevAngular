import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErroresService } from 'src/app/shared/errores.service';

@Injectable({
  providedIn: 'root',
})
export class ImpuestosProductoServicio {
  constructor(private http: HttpClient, private errores: ErroresService) { }

  // ? ==================================================================================
  // resolver obtnemos informacion del registro
  public Datainfo(id: number): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(`${environment.baseUrl}clientes/ctr/schema`,
      {
        "ExSchema": "contabilidad",
        "funcion": "app_producto_servicios_impuestos_estatales",
        "data": {
          "_id_inv_producto": id
        }
      },
      { headers: headers }
    ).pipe(
      catchError((error) => {
        return throwError(this.errores.getErrores(error));
      })
    );
  }

   // ? ==================================================================================
  // Asignar Ids 
  public AsignarIds(
        _tabla: String, 
        _Id_principal: String, 
        _Id_principal_valor: number,  
        _Id_secundario: String, 
        _Id_agregar: number[] ): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(`${environment.baseUrl}clientes/ctr/asignar`,
      {
        "Qtabla": _tabla,
        "Id_principal": _Id_principal,
        "Id_principal_valor": _Id_principal_valor,
        "Id_secundario": _Id_secundario,
        "Id_agregar": _Id_agregar
      },
      { headers: headers }
    ).pipe(
      catchError((error) => {
        return throwError(this.errores.getErrores(error));
      })
    );
  }
  
  // ? ==================================================================================
  // eliminar Ids 
  public EliminarIds(
        _tabla: String, 
        _Id_principal: String, 
        _Id_principal_valor: number,  
        _Id_secundario: String, 
        _Ids: number[] ): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http.post(`${environment.baseUrl}clientes/ctr/asignar`,
      {
        "Qtabla": _tabla,
        "Id_principal": _Id_principal,
        "Id_principal_valor": _Id_principal_valor,
        "Id_secundario": _Id_secundario,
        "Ids": _Ids
      },
      { headers: headers }
    ).pipe(
      catchError((error) => {
        return throwError(this.errores.getErrores(error));
      })
    );
  }

}
