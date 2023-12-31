import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { BuscarService } from './Service/BuscarService.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {

  
  public frmSat: FormGroup = this.fb.group({ descripcion: [, [Validators.required, Validators.minLength(3)]] });
  //tabla   
  public DataSource: any;
  public DataSourceColumnas: any;
  //=================================================================================================================
  // variables entre componentes
  @Input()
  public tabla: any;

  @Output() JsonSat = new EventEmitter<any>();
  
  //=================================================================================================================

  constructor(
    private fb: FormBuilder,
    private servicio: BuscarService
    //private datePipe: DatePipe,
  ) {}

  //Realizamos la busqueda
  public buscarinfo = () =>{
      //=======================================================================================
      this.servicio.buscar(this.tabla.Qtabla, this.tabla._Columna, this.tabla._OrderBY, this.frmSat.value.descripcion).subscribe(resp => {
        switch (resp.Detalle) {
          case  null:
            Swal.fire(resp.Mensaje,'0 registros','warning');
            break;
          default:
            this.DataSource = resp.Detalle; 
            this.DataSourceColumnas = Object.keys(this.DataSource[0]);
            this.frmSat.setValue(this.frmSat.value);
            Swal.fire(resp.Mensaje,'Operacion Exitosa');
          break;
        }  
      });
  }
  //==============================================================================================================
  // funcionalidad de la tabla:
  public onSelectionChange( args: any){
    this.DataSource = null;
    this.frmSat.controls['descripcion'].setValue('');
    this.JsonSat.emit(args[0]);
  }

  //=============================================================================================================
  //obtenemos las columnas
  public Obtenervalor = (obj: any): any[] => { return Object.values(obj);}

  //==============================================================================================================
  // obtener todos los registros
  /* public onSelectAllChange( args: any){
    this.JsonSat = args;
  }*/

}
