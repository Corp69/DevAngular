import { Component, OnInit } from '@angular/core';
import { HomeService } from './Services/Home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items:   any | undefined;
  public sidebarVisible: boolean = false;
  public theme = localStorage.getItem("theme");
  
  constructor( private servicio: HomeService, private router: Router) {}

 public changeTheme(theme: string) { localStorage.setItem('theme', theme); this.servicio.switchTheme(theme);}

 public navigateToUrl(url: any) { this.router.navigate([url]);}

 ngOnInit() {
    this.servicio.lstOpciones().subscribe(resp => {
      this.items   = resp.Detalle._app_menu_modulo;
      let items2   = this.items.map(group => group.menu); 
      this.items = items2;
    });
  }
}