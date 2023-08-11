import { Component } from '@angular/core';
import { HomeService } from './Services/Home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public lstOpciones: any;

  constructor(private servicio: HomeService) {
      this.servicio.lstOpciones().subscribe(resp => {this.lstOpciones = resp.Detalle._app_menu_x_empleado;
      console.log('Listado menu ===> ',this.lstOpciones);
      });
 
  }

  public OcultarBar(){
    
  }
  

  
}
