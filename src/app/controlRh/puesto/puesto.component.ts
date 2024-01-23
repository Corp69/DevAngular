import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdlPuesto } from './models/MdlPuesto';
import { PuestoService } from './services/Puesto.service';



@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['./puesto.component.scss']
})
export class PuestoComponent {


  public frmPuesto: FormGroup = this.fb.group({ 
    id: [-1], 
    descipcion: [, [Validators.required, Validators.minLength(3)]],
    puesto_unico: [, [Validators.required, Validators.minLength(3)]],
    costo: [, [Validators.required, Validators.minLength(3)]],
    codigo: [, [Validators.required, Validators.minLength(3)]],
    encargado: [, [Validators.required, Validators.minLength(3)]],
    activo: [, [Validators.required, Validators.minLength(3)]]
    
  });

  constructor(
    private fb: FormBuilder,
    private servicio: PuestoService
    //private datePipe: DatePipe,
  ) {
    
  }

  //==============================================================================================================
  //modelos:
  public MdlPuesto: MdlPuesto = new MdlPuesto();
  
  //==============================================================================================================
  //Config. de la app:
  public BtnSpinner: boolean = false;
  //==============================================================================================================
    
    //==============================================================================================================
  // Crud Para Puesto:
  Almacenar = () =>{
    this.BtnSpinner = true;
    setTimeout(() => {
      //===============================
      this.servicio.GuardarPuesto(this.frmPuesto.value).subscribe(resp => {
        switch (resp.Detalle) {
          case  null:
            break;
          default:
            this.frmPuesto.setValue(this.frmPuesto.value);
            this.frmPuesto.controls['id'].setValue(parseInt(resp.Detalle));
          break;
        }  
      });
      //===============================
      this.BtnSpinner = false;
    }, 1000);
  }
  
  /**
   * 
   * @returns NuevoPuesto: Resetea el formulario al valor del modelo.
   */
  public NuevoPuesto = () => {
    this.frmPuesto.setValue(this.MdlPuesto);
  }
  //==============================================================================================================
  //VALIDACIONES:

}
