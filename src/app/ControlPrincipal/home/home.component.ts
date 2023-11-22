import { Component, OnInit } from '@angular/core';
import { HomeService } from './Services/Home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public lstOpciones: any;
  public items: any;


  constructor(private servicio: HomeService) {
      this.servicio.lstOpciones().subscribe(resp => {
      this.lstOpciones = resp.Detalle._app_menu_x_empleado;
        console.log("menu " , this.lstOpciones );
      });
 
  }

  public OcultarBar(){
    
  }

  ngOnInit() {
    
}


public selectedState: any = null;


states: any[] = [
    {name: 'Arizona', code: 'Arizona'},
    {name: 'California', value: 'California'},
    {name: 'Florida', code: 'Florida'},
    {name: 'Ohio', code: 'Ohio'},
    {name: 'Washington', code: 'Washington'}
];

cities1: any[] = [];

cities2: any[] = [];

city1:any = null;

city2:any = null;

changeTheme(theme: string) {
    this.servicio.switchTheme(theme);
}





















}
