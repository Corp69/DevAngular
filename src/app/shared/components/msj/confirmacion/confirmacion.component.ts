import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-msjConfirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})


export class ConfirmacionComponent implements OnInit {

  //=================================================================================================================
  // variables entre componentes
  @Input()
  public msjBody: any;
  
  constructor(){}

  ngOnInit(): void {
    //=========================================================================================================================
    console.log(this.msjBody); 
   //=========================================================================================================================
 
  }


}
