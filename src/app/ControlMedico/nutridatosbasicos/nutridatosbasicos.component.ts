import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdlBasico } from './Models/MdlBasico';

@Component({
  selector: 'app-nutridatos-basicos',
  templateUrl: './nutridatosbasicos.component.html',
  styleUrls: ['./nutridatosbasicos.component.scss']
})
export class NutridatosBasicosComponent  implements OnInit {

  public BtnSpinner: boolean = false;
  public lstSexo: any;

  public MdlPaciente: MdlBasico = new MdlBasico();
  public frmBasico: FormGroup = this.fb.group({
    id: [-1],
    id_hos_paciente: [, [Validators.required, Validators.min(0)]],
    edad: [, [Validators.required, Validators.min(0)]],
    peso: [, [Validators.required, Validators.min(0)]],
    tallacm: [, [Validators.required, Validators.min(0)]],
    tallasentado: [, [Validators.required, Validators.min(0)]],
    envergadurabrazo: [, [Validators.required, Validators.min(0)]],
    id_cg_sexo: [-1]
  });
  
  constructor(
    private fb: FormBuilder,
    //private datePipe: DatePipe,
    //private servicio: VentasService
  ) {
    
  }

  ngOnInit() {
    //? ======================================================
    // seteamos los valores al formulario
    this.frmBasico.setValue(this.MdlPaciente);
    //=================================
    //carga del listado
    //this.servicio.lstEstatus().subscribe(resp => {this.lstEstatus = resp.Detalle._listado_filtro_estatus;});
  }

  public btnAlmacenar() {

  }


}
