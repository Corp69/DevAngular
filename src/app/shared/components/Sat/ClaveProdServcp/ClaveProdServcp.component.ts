import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Customer, Representative } from './domain/Customer';
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
  
  constructor(
    private fb: FormBuilder,
    private servicio: SatClaveprodservService
    //private datePipe: DatePipe,
  ) {}

  //
  public buscarinfo = () =>{
    console.log("formulario==",this.frmSat.value.descripcion);
      //=======================================================================================
      this.servicio.BuscarSatClaveprodServicio('sat_claveprodservcp', this.frmSat.value.descripcion ).subscribe(resp => {
        console.log(resp);
        switch (resp.Detalle) {
          case  null:
            Swal.fire(resp.Mensaje,'0 registros','warning');
            break;
          default:
            this.DataSource = resp.Detalle; 
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
    console.log(args)
  }

  public onSelectAllChange( args: any){
    console.log(args)
  }


}
