import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdlBasico } from './Models/MdlBasico';
import { BasicosService } from './Services/Basicos.service';


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
    private servicio: BasicosService
    //private datePipe: DatePipe,
  ) {
    
  }

  ngOnInit() {
    //? ======================================================
    // seteamos los valores al formulario
    this.frmBasico.setValue(this.MdlPaciente);
    console.log(this.lstSexo);
    //=================================
    //carga del listado
   this.servicio.listSexo().subscribe(resp => {this.lstSexo = resp.Detalle;});
  
  }

  public btnAlmacenar() {
    this.BtnSpinner = true;
    console.log("formulario==",this.frmBasico.value);
    setTimeout(() => {
      //===============================
      this.servicio.GuardarNtBasicos(this.frmBasico.value).subscribe(resp => {
        console.log(resp);
        switch (resp.Detalle.tb_ventas_por_fecha_limite) {
          case  null:
           
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
