import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlmacenService } from './services/almacenes.service';
import { MdlAlmacen } from './models/MdlAlmacen';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: ['./almacenes.component.scss']
})
export class AlmacenesComponent {

  public frmAlmacen: FormGroup = this.fb.group({
    id: [-1],
    descripcion: [, [Validators.required, Validators.minLength(3)]],
    ubicacion: [, [Validators.required, Validators.minLength(3)]]
  });
  
  constructor(
    private fb: FormBuilder,
    private servicio: AlmacenService
    //private datePipe: DatePipe,
  ) {
    
  }

  //==============================================================================================================
  // Modal: mensaje Confirmacion 
  public visibleMjs: boolean = false;
  // variables para mensaje actualizar guardar 
  public msjBody: any = { msjTipo: 1, titulo: '', mensaje: '', detalle: '' };

//==============================================================================================================
  //modelos:
  public MdlAlmacen: MdlAlmacen = new MdlAlmacen();
  //==============================================================================================================
  //Config. de la app:
  public BtnSpinner: boolean = false;
  //==============================================================================================================
  
  //==============================================================================================================
  // Crud Para Almacen:
  public Almacenar = () => {
      this.BtnSpinner = true;
      //===============================
      this.servicio.GuardarAlmacen(this.frmAlmacen.value).subscribe(resp => {
        switch (resp.Detalle) {
          case null:
            this.visibleMjs = true;
            //============================================================
            this.msjBody.msjTipo = 3;
            this.msjBody.titulo = 'Modulo Servicio: Developer®';
            this.msjBody.mensaje = 'La consulta de manera exitosa !';
            this.msjBody.detalle = 'Web Service Esta Fallando';
            break;
          case undefined:
            this.visibleMjs = true;
            //============================================================
            this.msjBody.msjTipo = 3;
            this.msjBody.titulo = 'Modulo Servicio: Developer®';
            this.msjBody.mensaje = 'La consulta de manera exitosa !';
            this.msjBody.detalle = 'Web Service Esta Fallando';
            break;
          default:
            this.visibleMjs = true;
            this.msjBody.msjTipo = 1;
            //============================================================
            this.msjBody.titulo = resp.Titulo;
            this.msjBody.titulo = 'Modulo Servicio: Developer®';
            this.msjBody.mensaje = resp.Mensaje;
            this.msjBody.detalle = resp.Detalle;
            //============================================================
            this.frmAlmacen.setValue(this.frmAlmacen.value);
            this.frmAlmacen.controls['id'].setValue(parseInt(resp.Id));
            break;
        }
        this.BtnSpinner = false;
      });
  }
  
  /**
   * 
   * @returns NuevoProvedor: Resetea el formulario al valor del modelo.
   */
  public NuevoAlmacen = () => {
    this.frmAlmacen.setValue(this.MdlAlmacen);
  }
  //==============================================================================================================
  //VALIDACIONES:

  

}
