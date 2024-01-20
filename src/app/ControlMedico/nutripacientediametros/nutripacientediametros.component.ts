import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mdldiametros } from './Models/MdlDiametros';
import { ServiceDiametro } from './Services/ServiceDiametro';


@Component({
  selector: 'app-nutripacientediametros',
  templateUrl: './nutripacientediametros.component.html',
  styleUrls: ['./nutripacientediametros.component.scss']
})
export class NutripacientediametrosComponent implements OnInit {

  public BtnSpinner: boolean = false;
  public lstSexo: any;

  public Mdldiametros: Mdldiametros = new Mdldiametros();
  public frmDiametro: FormGroup = this.fb.group({
    id: [-1],
    id_hos_paciente: [, [Validators.required, Validators.min(0)]],
    humero: [, [Validators.required, Validators.min(0)]],
    biestiloideo: [, [Validators.required, Validators.min(0)]],
    femur: [, [Validators.required, Validators.min(0)]],
    id_cg_sexo: [-1]
  });
  
  constructor(
    private fb: FormBuilder,
    private servicio: ServiceDiametro
    //private datePipe: DatePipe,
    //private servicio: VentasService
  ) {
    
  }

  ngOnInit() {
    //? ======================================================
    // seteamos los valores al formulario
    this.frmDiametro.setValue(this.Mdldiametros);
    //=================================
    //carga del listado
    //
   this.servicio.listSexo().subscribe(resp => {this.lstSexo = resp.Detalle;});
  }

  public btnAlmacenar() {
    this.BtnSpinner = true;
    console.log("formulario==",this.frmDiametro.value);
    setTimeout(() => {
      //===============================
      this.servicio.GuardarDiametros(this.frmDiametro.value).subscribe(resp => {
        console.log(resp);
        switch (resp.Detalle) {
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
