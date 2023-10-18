import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomiciliosService } from './Service/Domicilios.service';

@Component({
  selector: 'app-domicilios',
  templateUrl: './domicilios.component.html',
  styleUrls: ['./domicilios.component.scss']
})
export class DomiciliosComponent implements OnInit{

  

  //==============================================================================================================
  // Formularios
  public frmDomiclio: FormGroup = this.fb.group({
    id:                      [-1],
    calle:                   [, [Validators.required, Validators.minLength(3)]],
    num_ext:                 [, [Validators.required, Validators.minLength(3)]],
    num_int:                 [, [Validators.required, Validators.minLength(3)]],
    cp:                      [, [Validators.required, Validators.minLength(3)]],
    
    id_municipio:            [-1, [Validators.required, Validators.min(0)]],
    id_localidad:            [-1, [Validators.required, Validators.min(0)]],
    id_estado:               [-1, [Validators.required, Validators.min(0)]],
    id_colonia:              [-1, [Validators.required, Validators.min(0)]],
    id_rh_empleado_registro: [localStorage.getItem('id')]
  });
  //==============================================================================================================
  // listados
  public lstEstado:         any;
  //==============================================================================================================
  constructor(
    private fb: FormBuilder,
    private servicio: DomiciliosService
    //private datePipe: DatePipe,
  ) {}
  ngOnInit(): void {
    //=========================================================================================================================
    //Consumo de listados
    this.servicio.BuscarTB(1,146).subscribe(resp => {this.lstEstado = resp.Detalle;
      console.log(resp)
    });
   //=========================================================================================================================
 
  }

  public hola(){
    console.log('hola ')
  }



  

}
