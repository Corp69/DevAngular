import { Component, OnInit } from '@angular/core';
import { HomeService } from './Services/Home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public lstOpciones: any;
  public items: any | undefined;
  public sidebarVisible: boolean = false;
  public theme = localStorage.getItem("theme");
    

  constructor(private servicio: HomeService) {
    
  }

 public changeTheme(theme: string) {
    localStorage.setItem('theme', theme);
    this.servicio.switchTheme(theme);
  }

  ngOnInit() {
    this.servicio.lstOpciones().subscribe(resp => {
      this.items = resp.Detalle._app_menu_x_empleado;
    });
  }
}
