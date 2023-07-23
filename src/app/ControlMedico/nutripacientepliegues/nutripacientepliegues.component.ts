import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdlPliegues } from './Models/MdlPliegues';

@Component({
  selector: 'app-nutripacientepliegues',
  templateUrl: './nutripacientepliegues.component.html',
  styleUrls: ['./nutripacientepliegues.component.scss']
})
export class NutripacienteplieguesComponent implements OnInit {
  public BtnSpinner: boolean = false;
  public lstSexo: any;

  public MdlPliegues: MdlPliegues = new MdlPliegues();
  public frmPliegues: FormGroup = this.fb.group({
    id: [-1],
    id_hos_paciente: [, [Validators.required, Validators.min(0)]],
    p_subescapular: [0.00, [Validators.required, Validators.min(0)]],
    p_tricipital: [0.00, [Validators.required, Validators.min(0)]],
    p_bicipital: [0.00, [Validators.required, Validators.min(0)]],
    p_cresta_ileaca: [0.00, [Validators.required, Validators.min(0)]],
    p_supraespinal: [0.00, [Validators.required, Validators.min(0)]],
    p_abdominal: [0.00, [Validators.required, Validators.min(0)]],
    p_muslo: [0.00, [Validators.required, Validators.min(0)]],
    p_pantorrilla: [0.00, [Validators.required, Validators.min(0)]],
    p_pectoral: [0.00, [Validators.required, Validators.min(0)]],
    p_axilar: [0.00, [Validators.required, Validators.min(0)]], 
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
    this.frmPliegues.setValue(this.MdlPliegues);
    //=================================
    //carga del listado
    //this.servicio.lstEstatus().subscribe(resp => {this.lstEstatus = resp.Detalle._listado_filtro_estatus;});
  }

  public btnAlmacenar() {

  }
}
