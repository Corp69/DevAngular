import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lst-productos',
  templateUrl: './lstproductos.component.html',
  styleUrls: ['./lstproductos.component.scss']
})
export class LstProductosComponent {

    // Json para componente busqueda 
    public tabalaBuscar1: any = 
    { 
      "mostrar":  false, 
      "Qtabla":   "Producto y Servicios",
      "_schema":  "inventarios",
      "_funcion": "lstProductos"
    };

    constructor(  private router: Router) {}


      //==============================================================================================================
  // metdos o funciones de los modales
  public  seleccionarRegistro ( jsonRes: any ){ 
    this.router.navigate(["ControlInventarios/producto/"+jsonRes.id]);}

}
