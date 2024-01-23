import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdlPliegues } from './Models/MdlPliegues';
import { PlieguesService } from './Services/Pliegues.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nutripacientepliegues',
  templateUrl: './nutripacientepliegues.component.html',
  styleUrls: ['./nutripacientepliegues.component.scss'],
})
export class NutripacienteplieguesComponent implements OnInit {
  public BtnSpinner: boolean = false;
  public lstSexo: any;
  public dataPliegues: any;
  public params: any;
  public idURL: any;
  public MdlPliegues: MdlPliegues = new MdlPliegues();
  public frmPliegues: FormGroup = this.fb.group({
    id: [-1],
    id_hos_paciente: [, [Validators.required, Validators.min(0)]],
    p_subescapular: [0.0, [Validators.required, Validators.min(0)]],
    p_tricipital: [0.0, [Validators.required, Validators.min(0)]],
    p_bicipital: [0.0, [Validators.required, Validators.min(0)]],
    p_cresta_ileaca: [0.0, [Validators.required, Validators.min(0)]],
    p_supraespinal: [0.0, [Validators.required, Validators.min(0)]],
    p_abdominal: [0.0, [Validators.required, Validators.min(0)]],
    p_muslo: [0.0, [Validators.required, Validators.min(0)]],
    p_pantorrilla: [0.0, [Validators.required, Validators.min(0)]],
    p_pectoral: [0.0, [Validators.required, Validators.min(0)]],
    p_axilar: [0.0, [Validators.required, Validators.min(0)]],
    id_cg_sexo: [-1],
    fecha_registro: new Date(),
  });

  constructor(
    private fb: FormBuilder,
    private servicio: PlieguesService,
    private route: ActivatedRoute
  ) //private datePipe: DatePipe,
  //private servicio: VentasService
  {
    this.route.paramMap.subscribe((params) => {
     this.idURL = params.get('id');
      if (this.idURL>-1) {
        // Aquí puedes usar el valor del ID como necesites
        this.servicio.InfoDespliegues(this.idURL).subscribe((resp) => {
          this.dataPliegues = resp.Detalle;
          this.frmPliegues.setValue(this.dataPliegues[0]);
        });
       }else{
        this.frmPliegues.setValue(this.MdlPliegues)
      } 
    });
  }

  ngOnInit() {
    //? ======================================================
    // seteamos los valores al formulario
    //this.frmPliegues.setValue(this.MdlPliegues);
    //=================================
    //carga del listado
    //this.servicio.lstEstatus().subscribe(resp => {this.lstEstatus = resp.Detalle._listado_filtro_estatus;});
    this.servicio.listSexo().subscribe((resp) => {
      this.lstSexo = resp.Detalle;
    });

    //this.frmPliegues.setValue(this.dataPliegues[0]);
    // this.frmPliegues.controls['fecha1'].setValue(this.dataPliegues.value);
  }

  public btnAlmacenar() {
    this.BtnSpinner = true;
    setTimeout(() => {
      //===============================
      this.servicio
        .GuardarPliegues(this.frmPliegues.value)
        .subscribe((resp) => {
          switch (resp.Detalle) {
            case null:
              break;
            default:
              break;
          }
        });
      //===============================
      this.BtnSpinner = false;
    }, 1000);
  }
}
