import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent {

  // ******************************************
  // variable: modales
  public visible:  boolean = true;
  public Titulo:   String  = 'Developer' 
  public Mensaje:  String  = 'Operacion al servicio OK !' 
  public Detalle:  String  = 'Transaccion Exitosa' 
  

  constructor(){
    
  }

}
