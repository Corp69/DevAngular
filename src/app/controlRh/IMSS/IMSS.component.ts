import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ImssService } from './Services/Imss.service';
import { MdlImss } from './models/MdlImss';

@Component({
  selector: 'app-IMSS',
  templateUrl: './IMSS.component.html',
  styleUrls: ['./IMSS.component.scss']
})  
export class IMSSComponent {

  //==============================================================================================================
  //Config. de la app: Bloqueo de botones
  public BtnSpinner: boolean = false;

  //==============================================================================================================
  // Modal: mensaje Confirmacion 
  public visibleMjs: boolean = false;
  // variables para mensaje actualizar guardar 
  public msjBody: any = { msjTipo: 1, titulo: '', mensaje: '', detalle: '' };
  //==============================================================================================================
  // listados
  public lstEstadoCivil: any;
  //==============================================================================================================
  //modelos:
  public MdlImss: MdlImss = new MdlImss();
  //==============================================================================================================
  //Formularios del app:
  public frmImss: FormGroup = this.fb.group({
    id: [-1],
    nss: [, [Validators.required, Validators.min(0)]],
    registro_patronal: [ ,[Validators.required, Validators.minLength(3)]],
    UMF: [ ,[Validators.required, Validators.minLength(3)]],
    extranjero: [false],

    id_rh_empleado: [-1],
    id_estado_civil: [1],
  
  });


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private servicio: ImssService
    //private datePipe: DatePipe,
  ) {
    this.route.params.subscribe(params => {
      if (+params['id'] > -1) {
        // AGREGAMOS LA INFORMACION AL FORMULARIO
        this.servicio.Datainfo(+params['id']).subscribe(resp => {
          this.frmImss.setValue(resp.Detalle);
        });
        //CARGAMOS CFDI
        //this.servicio.Datacfdi(+params['id']).subscribe(resp => {
          // rellenamos los campos de CFDI EN UNA CONSULTA APARTE  

        //});



      }
    });
  }


  
  ngOnInit() {
    //=========================================================================================================================
    //carga listados
    this.servicio.listCivil().subscribe(resp => { this.lstEstadoCivil = resp.Detalle; });
    //=========================================================================================================================
  }

  //==============================================================================================================
  // Almacena Actualiza  Para IMSS:
  Almacenar = () => {
    this.BtnSpinner = true;
    //===============================
    this.servicio.AlmacenarImss(this.frmImss.value).subscribe(resp => {
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
          this.msjBody.detalle = (resp.Detalle.Detalle.detail.length == undefined) ? resp.Detalle  : resp.Detalle.Detalle.detail;
          //============================================================
          this.frmImss.setValue(this.frmImss.value);
          this.frmImss.controls['id'].setValue(parseInt(resp.Id));
          break;
      }
      this.BtnSpinner = false;
    });
    //===============================
  }

  public Nuevo = () => {
    this.visibleMjs = false;
    this.frmImss.setValue(this.MdlImss);
    this.frmImss.controls['id'].setValue(-1);
  }
}
