import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lstcliente',
  templateUrl: './lstcliente.component.html',
  styleUrls: ['./lstcliente.component.scss']
})
export class LstClienteComponent {

  constructor(  private router: Router) {}

  // Json para componente busqueda 
  public tabalaBuscar1: any = 
  { 
    "mostrar":  false, 
    "Qtabla":   "cliente",
    "_schema":  "ventas",
    "_funcion": "lstcliente"
  };
  //==============================================================================================================
  // metdos o funciones de los modales
  public  seleccionarRegistro ( jsonRes: any ){ 
    this.router.navigate(["ControlVentas/Cliente/"+jsonRes.id]);}

}