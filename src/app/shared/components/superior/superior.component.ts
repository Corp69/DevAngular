import { Component } from '@angular/core';
import { HomeService } from './Services/Home.service';

@Component({
  selector: 'app-superior',
  templateUrl: './superior.component.html',
  styleUrls: ['./superior.component.scss']
})
export class SuperiorComponent {
  public lstOpciones: any;

  constructor(private servicio: HomeService) 
  {
    this.servicio.lstOpciones().subscribe(resp => {this.lstOpciones = resp.Detalle._app_menu_x_empleado;});
  }
}
