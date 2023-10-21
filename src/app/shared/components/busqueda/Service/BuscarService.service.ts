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
  //? ===================================================================================================
  //  Busqueda dinamica 
  /**
   * @method  buscar: ====> realiza la busqueda de forma dinamica 
   *   
   * @variable _tabla:     pasamos la tabla a buscar
   * @variable _columna:   pasamos la columna donde haremos el filtro
   * @variable _OrderBy:   columna por la cual ordenaremos
   * @variable _busqueda:  filtro o busqueda que se realizara lo que estoy buscando se limita a 50 registros
   
   * @returns  Json Array busqueda de 50 registros
   */
  public buscar(  _tabla: String, _columna: String, _OrderBy: String, _busqueda: String ): Observable<any> {
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`});
    return this.http.post(`${environment.baseUrl}clientes/ctr/columna/buscar`,
    {"Qtabla": _tabla,"_Columna": _columna,"_OrderBY": _OrderBy,"_busqueda": _busqueda},
    { headers: headers }).pipe( catchError(error => { return throwError(this.errores.getErrores(error));}));
  }
  //===================================================================================================
}
