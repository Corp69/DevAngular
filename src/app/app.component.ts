import { Component } from "@angular/core";
import { HomeService } from "./ControlPrincipal/home/Services/Home.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    public theme: string = "";
    constructor(private servicio: HomeService) {
        this.servicio.switchTheme(localStorage.getItem("theme"));
    }
    
    public changeTheme(theme: string) {
        localStorage.setItem('theme', theme);
        this.servicio.switchTheme(localStorage.getItem("theme"));
    }
}



