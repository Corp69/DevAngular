import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SatClaveprodservService } from './Service/SatClaveprodserv.service';

@Component({
  selector: 'app-ClaveProdServcp',
  templateUrl: './ClaveProdServcp.component.html',
  styleUrls: ['./ClaveProdServcp.component.scss']
})
export class ClaveProdServcpComponent {

  public frmSat: FormGroup = this.fb.group({ descripcion: [, [Validators.required, Validators.minLength(3)]] });
  //tabla   
  public DataSource: any;
  public DataSourceColumnas: any;
  public arrayDinamico: any;
  //=================================================================================================================
  // variables entre componentes
  @Input()
  public tabla: String = '';
  @Output() JsonSat = new EventEmitter<any>();
  
  //=================================================================================================================

  constructor(
    private fb: FormBuilder,
    private servicio: SatClaveprodservService
    //private datePipe: DatePipe,
  ) {}
  //
  public buscarinfo = () =>{
    console.log('tabla ====> ',this.tabla);
    console.log("formulario==",this.frmSat.value.descripcion);
      //=======================================================================================
      this.servicio.BuscarSatClaveprodServicio(this.tabla, this.frmSat.value.descripcion ).subscribe(resp => {
        console.log(resp);
        switch (resp.Detalle) {
          case  null:
            Swal.fire(resp.Mensaje,'0 registros','warning');
            break;
          default:
            this.DataSource = resp.Detalle; 
            this.DataSourceColumnas = Object.keys(this.DataSource[0]);
            this.arrayDinamico = this.DataSourceColumnas.map((x: any) => `DataSource.${x}`);




         
            this.frmSat.setValue(this.frmSat.value);
            Swal.fire(resp.Mensaje,'Operacion Exitosa');
          break;
        }  
      });
      //=====================================================================================
  }

  //==============================================================================================================
  // Crud Para Almacen:
  public onSelectionChange( args: any){
    this.JsonSat.emit(args[0]);
    this.DataSource =null;
    this.frmSat.controls['descripcion'].setValue('');
  }

  public getValues(obj: any): any[] {
    return Object.values(obj);
  }

  public onSelectAllChange( args: any){
    this.JsonSat = args;
  }
}
