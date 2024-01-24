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
 
  public buscar(  _tabla: String, _columna: String, _OrderBy: String, _busqueda: String ): Observable<any> {
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`});
    return this.http.post(`${environment.baseUrl}clientes/ctr/columna/buscar`,
    {"Qtabla": _tabla,"_Columna": _columna,"_OrderBY": _OrderBy,"_busqueda": _busqueda},
    { headers: headers }).pipe( catchError(error => { return throwError(this.errores.getErrores(error));}));
  }

  public BuscarSatClaveprodServicio(  _tabla: String, _item: String ): Observable<any> {
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`});
    return this.http.post(`${environment.baseUrl}clientes/ctr/buscar`,
        { "Qtabla":_tabla, "_busqueda": _item },
        { headers: headers }).pipe( catchError(error => { return throwError(this.errores.getErrores(error));}));
  }
  //===================================================================================================
}
