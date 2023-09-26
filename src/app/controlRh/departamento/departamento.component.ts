import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MdlDepartamento } from './models/MdlDepartamento';
import { DepartamentoService } from './services/Departamento.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})

export class DepartamentoComponent {

  
  public frmDepartamento: FormGroup = this.fb.group({ 
    id: [-1], 
    descipcion: [, [Validators.required, Validators.minLength(3)]],
    soporte: [, [Validators.required, Validators.minLength(3)]],
    tolerancia_asistencia: [, [Validators.required, Validators.minLength(3)]],
    tolerancia_entrada: [, [Validators.required, Validators.minLength(3)]],
    tolerancia_permiso: [, [Validators.required, Validators.minLength(3)]],
    tolerancia_retardo: [, [Validators.required, Validators.minLength(3)]],
    falta_retardo: [, [Validators.required, Validators.minLength(3)]],
    tolerancia_falta: [, [Validators.required, Validators.minLength(3)]],
    confianza: [, [Validators.required, Validators.minLength(3)]],
    jornada_lunes_inicia: [, [Validators.required, Validators.minLength(3)]],
    jornada_lunes_termina: [, [Validators.required, Validators.minLength(3)]],
    jornada_martes_inicia: [, [Validators.required, Validators.minLength(3)]],
    jornada_martes_termina: [, [Validators.required, Validators.minLength(3)]],
    jornada_miercoles_inicia: [, [Validators.required, Validators.minLength(3)]],
    jornada_miercoles_termina: [, [Validators.required, Validators.minLength(3)]],
    jornada_jueves_inicia: [, [Validators.required, Validators.minLength(3)]],
    jornada_jueves_termina: [, [Validators.required, Validators.minLength(3)]],
    jornada_viernes_inicia: [, [Validators.required, Validators.minLength(3)]],
    jornada_viernes_termina: [, [Validators.required, Validators.minLength(3)]],
    jornada_sabado_inicia: [, [Validators.required, Validators.minLength(3)]],
    jornada_sabado_termina: [, [Validators.required, Validators.minLength(3)]],
    jornada_domingo_inicia: [, [Validators.required, Validators.minLength(3)]],
    jornada_domingo_termina: [, [Validators.required, Validators.minLength(3)]]
    
  });

  constructor(
    private fb: FormBuilder,
    private servicio: DepartamentoService
    //private datePipe: DatePipe,
  ) {
    
  }

  //==============================================================================================================
  //modelos:
  public MdlDepartamento: MdlDepartamento = new this.MdlDepartamento();
  //==============================================================================================================
  //Config. de la app:
  public BtnSpinner: boolean = false;
  //==============================================================================================================
    
    //==============================================================================================================
  // Crud Para Departamento:
  Almacenar = () =>{
    this.BtnSpinner = true;
    console.log("formulario==",this.frmDepartamento.value);
    setTimeout(() => {
      //===============================
      this.servicio.GuardarDepartamento(this.frmDepartamento.value).subscribe(resp => {
        console.log(resp);
        switch (resp.Detalle) {
          case  null:
            Swal.fire(resp.Mensaje,'0 registros','warning');
            break;
          default:
            this.frmDepartamento.setValue(this.frmDepartamento.value);
            this.frmDepartamento.controls['id'].setValue(parseInt(resp.Detalle));
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
   * @returns NuevoDepartamento: Resetea el formulario al valor del modelo.
   */
  public NuevoDepartamento = () => {
    this.frmDepartamento.setValue(this.MdlDepartamento);
  }
  //==============================================================================================================
  //VALIDACIONES:

}

