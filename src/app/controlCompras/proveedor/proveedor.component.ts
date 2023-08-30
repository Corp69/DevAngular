import { Component, OnInit } from '@angular/core';
import { MdlProveedor } from './models/MdlProveedor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProveedorService } from './Services/Proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent  implements OnInit {
  //==============================================================================================================
  // Listados:
  public lstestatus: any;
  public lstProveedorTipo: any;
  public lstProveedorClasificacion: any;
  public lstProovedorOperacion: any;
  //==============================================================================================================
  //modelos:
  public MdlProveedor: MdlProveedor = new MdlProveedor();
  //==============================================================================================================
  //Config. de la app:
  public BtnSpinner: boolean = false;
  //==============================================================================================================
  //Formularios del app:
  public frmProveedor: FormGroup = this.fb.group({
    id: [-1],
    nombre: [, [Validators.required, Validators.minLength(3)]],
    paterno: [, [Validators.required, Validators.minLength(3)]],
    materno: [, [Validators.required, Validators.minLength(3)]],
    codigo: [, [Validators.required, Validators.minLength(3)]],
    cp: [, [Validators.required, Validators.minLength(3)]],
    rfc: [, [Validators.required, Validators.minLength(3)]],
    id_proveedor_estatus: [1, [Validators.required, Validators.min(0)]],
    id_proveedor_tipo: [1, [Validators.required, Validators.min(0)]],
    id_proveedor_clasificacion: [1, [Validators.required, Validators.min(0)]],
    id_rh_empleado: [localStorage.getItem("id"), [Validators.required, Validators.min(0)]],
    id_proveedor_operacion: [1, [Validators.required, Validators.min(0)]]
  });

  constructor(
    private fb: FormBuilder,
    private servicio: ProveedorService
    //private datePipe: DatePipe,
  ) {
    
  }

  ngOnInit() {
  //=========================================================================================================================
  //carga listados
   this.servicio.listProveedorEstatus().subscribe(resp => {this.lstestatus = resp.Detalle;});
   this.servicio.listProveedorTipo().subscribe(resp => {this.lstProveedorTipo = resp.Detalle;});
   this.servicio.listProveedorOperacion().subscribe(resp => {this.lstProovedorOperacion = resp.Detalle;});
   this.servicio.listProveedorClasificacion().subscribe(resp => {this.lstProveedorClasificacion = resp.Detalle;});
  //=========================================================================================================================
  }

  //==============================================================================================================
  // Crud Para Proveedores:
  Almacenar = () =>{
    this.BtnSpinner = true;
    console.log("formulario==",this.frmProveedor.value);
    setTimeout(() => {
      //===============================
      this.servicio.AlmacenarProveedor(this.frmProveedor.value).subscribe(resp => {
        console.log(resp);
        switch (resp.Detalle) {
          case  null:
            Swal.fire(resp.Mensaje,'0 registros','warning');
            break;
          default:
            this.frmProveedor.setValue(this.frmProveedor.value);
            this.frmProveedor.controls['id'].setValue(parseInt(resp.Detalle));
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
  public NuevoProvedor = () => {
    this.frmProveedor.setValue(this.MdlProveedor);
    this.frmProveedor.controls['id_rh_empleado'].setValue(localStorage.getItem("id"));
  }
  //==============================================================================================================
  //VALIDACIONES:

  

}
