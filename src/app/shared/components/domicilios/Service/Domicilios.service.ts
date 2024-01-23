import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErroresService } from 'src/app/shared/errores.service';
import { MdlDomicilio } from '../Models/MdlDomicilio';

@Injectable({
  providedIn: 'root',
})
export class DomiciliosService {
  constructor(private http: HttpClient, private errores: ErroresService) { }
  //? ===================================================================================================
  //       Listados: Domicilios
  /**
   * @method BuscarTB  ==> realiza la busqueda por medio de tabla, por medio de los campos dinamicos
   * 
   * @param _id       ==> Pasamos id para filtrar 1 estado 2 municipio 3 localidad 
   * @param _filtro   ==> puede ser 146 para pais mexico o agregar otro id o varios
   * @returns 
   */
  public BuscarTB( _id: number, _filtro: Number ): Observable<any> {
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}`});
    return this.http.post(`${environment.baseUrl}clientes/ctr/filtroIDs`,
    this._estado(_id, _filtro),
    { headers: headers }).pipe( catchError(error => { return throwError(this.errores.getErrores(error));}));
  }


/**
 * 
 * @param _id => 1:estado 2:municipio 3:localidad 4:colonia  argumento de tipo numero para realizar el filtro por medio de _estado
 * @param _filtro => este argumento es especial para mantener el id del estado o pais segun sea el valor anterior
 * @returns Json array ==> devolvera sea estado por páis 146: mexico filtrando pór estado
 * 
 */
private _estado( _id: Number, _filtro: Number ){
 switch ( _id ) {
  case 1:
        return {
          "Qtabla":"estado",
          "_columna": "id_pais",
          "_orderBY": "descripcion",
          "Datos": {"ids": [146]}
        }
    break;
  case 2:
        return {
          "Qtabla":"municipio",
          "_columna": "id_estado",
          "_orderBY": "descripcion",
          "Datos": {"ids": [_filtro]}
        }
    break;
  case 3:
        return {
          "Qtabla":"estado",
          "_columna": "id_pais",
          "_orderBY": "descripcion",
          "Datos": {"ids": [_filtro]}
        }
    break;
  case 4:
        return {
          "Qtabla":"localidad",
          "_columna": "id_estado",
          "_orderBY": "descripcion",
          "Datos": {"ids": [_filtro]}
        }
    break;
  default:
    return {
      "Qtabla":"estado",
      "_columna": "id_pais",
      "_orderBY": "descripcion",
      "Datos": {"ids": [146]}
    }
  break;
 }
 
}

  //==================================================================================================
  //guardar
  public AlmacenarDomicilio(modelo: MdlDomicilio): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return this.http
      .post(
        `${environment.baseUrl}clientes/ctr/agregar`,
        {
          Qtabla: 'rh_empleado_domicilio',
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
