import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuscarService } from './Service/BuscarService.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  
  public frm: FormGroup = this.fb.group({ descripcion: [, [Validators.required, Validators.minLength(3)]] });
  //tabla   
  public DataSource: any;
  public DataSourceColumnas: any;
  //=================================================================================================================
  // variables entre componentes
  @Input()
  public tabla: any;
  public tablaBusqueda: String  = ""; 

  @Output() JsonRes = new EventEmitter<any>();
  
  //=================================================================================================================

  constructor( private fb: FormBuilder, private servicio: BuscarService
    //private datePipe: DatePipe,
  ) {
  }

  ngOnInit() {
   this.tablaBusqueda = this.tabla.Qtabla; 
  }

  //Realizamos la busqueda
  public buscarinfo = () =>{
      //=======================================================================================
      this.servicio.buscar(this.tabla.Qtabla, this.tabla._Columna, this.tabla._OrderBY, this.frm.value.descripcion).subscribe(resp => {
        switch (resp.Detalle) {
          case  null:
            break;
          default:
            this.DataSource = resp.Detalle; 
            this.DataSourceColumnas = Object.keys(this.DataSource[0]);
            this.frm.setValue(this.frm.value);
          break;
        }  
      });
  }
  //==============================================================================================================
  // funcionalidad de la tabla:
  public onSelectionChange( args: any){
    this.DataSource = null;
    this.frm.controls['descripcion'].setValue('');
    this.JsonRes.emit(args[0]);
  }

  //=============================================================================================================
  //obtenemos las columnas
  public Obtenervalor = (obj: any): any[] => { return Object.values(obj);}

  //==============================================================================================================
  // obtener todos los registros
   public onSelectAllChange( args: any){
    this.JsonRes = args;
  }

}
