import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErroresService } from 'src/app/shared/errores.service';

@Injectable({
  providedIn: 'root',
})
export class SatClaveprodservService {
  constructor(private http: HttpClient, private errores: ErroresService) { }
  //? ===================================================================================================
  //       Listados: Proveedor 
  /**
   * 
   * @returns  Json Array catalogo de Sat dependiento de lo que se esta realñizando la busqueda
   */
  public BuscarSatClaveprodServicio(  _tabla: string, _item: string ): Observable<any> {
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`});
    return this.http.post(`${environment.baseUrl}clientes/ctr/buscar`,
        { "Qtabla":_tabla, "_busqueda": _item },
        { headers: headers }).pipe( catchError(error => { return throwError(this.errores.getErrores(error));}));
  }
  //===================================================================================================
}
