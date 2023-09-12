import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SucursalService } from './services/Sucursal.service';
import { MdlSucursal } from './models/MdlSucursal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent {

  public frmSucursal: FormGroup = this.fb.group({ 
    id: [-1], 
    nombre: [, [Validators.required, Validators.minLength(3)]],
    director: [, [Validators.required, Validators.minLength(3)]],
    nombrecomercial: [, [Validators.required, Validators.minLength(3)]],
    rfc: [, [Validators.required, Validators.minLength(3)]],
    cedula: [, [Validators.required, Validators.minLength(3)]],
    calle: [, [Validators.required, Validators.minLength(3)]],
    num_ext: [, [Validators.required, Validators.minLength(3)]],
    num_int: [, [Validators.required, Validators.minLength(3)]],
    colonia: [, [Validators.required, Validators.minLength(3)]],
    estado: [, [Validators.required, Validators.minLength(3)]],
    localidad: [, [Validators.required, Validators.minLength(3)]],
    municipio: [, [Validators.required, Validators.minLength(3)]],
    codigo: [, [Validators.required, Validators.minLength(3)]],
    pais: [, [Validators.required, Validators.minLength(3)]],
    regimen: [, [Validators.required, Validators.minLength(3)]],
    representante: [, [Validators.required, Validators.minLength(3)]],
    observaciones: [, [Validators.required, Validators.minLength(3)]],
    autoriza: [, [Validators.required, Validators.minLength(3)]],
    numero: [, [Validators.required, Validators.minLength(3)]]
    
  });

  constructor(
    private fb: FormBuilder,
    private servicio: SucursalService
    //private datePipe: DatePipe,
  ) {
    
  }

  //==============================================================================================================
  //modelos:
  public MdlSucursal: MdlSucursal = new MdlSucursal();
  //==============================================================================================================
  //Config. de la app:
  public BtnSpinner: boolean = false;
  //==============================================================================================================
    
    //==============================================================================================================
  // Crud Para Sucursal:
  Almacenar = () =>{
    this.BtnSpinner = true;
    console.log("formulario==",this.frmSucursal.value);
    setTimeout(() => {
      //===============================
      this.servicio.GuardarSucursal(this.frmSucursal.value).subscribe(resp => {
        console.log(resp);
        switch (resp.Detalle) {
          case  null:
            Swal.fire(resp.Mensaje,'0 registros','warning');
            break;
          default:
            this.frmSucursal.setValue(this.frmSucursal.value);
            this.frmSucursal.controls['id'].setValue(parseInt(resp.Detalle));
            Swal.fire(resp.Mensaje,'Operacion Exitosa');
          break;
        }  
      });
      //===============================
      this.BtnSpinner = false;
    }, 1000);
  }
  
  /**
   * 
   * @returns NuevoProvedor: Resetea el formulario al valor del modelo.
   */
  public NuevaSucursal = () => {
    this.frmSucursal.setValue(this.MdlSucursal);
  }
  //==============================================================================================================
  //VALIDACIONES:

}
