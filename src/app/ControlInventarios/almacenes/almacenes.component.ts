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
  //modelos:
  public MdlAlmacen: MdlAlmacen = new MdlAlmacen();
  //==============================================================================================================
  //Config. de la app:
  public BtnSpinner: boolean = false;
  //==============================================================================================================
  
  //==============================================================================================================
  // Crud Para Almacen:
  Almacenar = () =>{
    this.BtnSpinner = true;
    console.log("formulario==",this.frmAlmacen.value);
    setTimeout(() => {
      //===============================
      this.servicio.GuardarAlmacen(this.frmAlmacen.value).subscribe(resp => {
        console.log(resp);
        switch (resp.Detalle) {
          case  null:
            Swal.fire(resp.Mensaje,'0 registros','warning');
            break;
          default:
            this.frmAlmacen.setValue(this.frmAlmacen.value);
            this.frmAlmacen.controls['id'].setValue(parseInt(resp.Detalle));
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
  public NuevoAlmacen = () => {
    this.frmAlmacen.setValue(this.MdlAlmacen);
  }
  //==============================================================================================================
  //VALIDACIONES:

  

}
