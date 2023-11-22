import { DOCUMENT } from "@angular/common";
import { Component, Inject } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'DevApp';

  themeSelection: boolean = false;
  
  constructor(@Inject(DOCUMENT) private document: Document ) 
  {
    let theme = window.localStorage.getItem("");
    if (theme) 
    {
      this.themeSelection = theme == 'dark' ? true: false;
      this.changeTheme(this.themeSelection);
    } 
  }


  changeTheme(state: boolean)
  {

    console.log(state);
    console.log("valor ===   ", state );

    let theme = state ? 'dark' : 'light';
    window.localStorage.setItem("theme", theme);
    let themeLink  = this.document.getElementById('app-theme') as HTMLLinkElement
    themeLink.href = 'lara-' + theme + '-blue' + '.css'
  }

}
