import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomiciliosService } from './Service/Domicilios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-domicilios',
  templateUrl: './domicilios.component.html',
  styleUrls: ['./domicilios.component.scss']
})
export class DomiciliosComponent implements OnInit{

  //==============================================================================================================
  // herencia padre e hijo 
  public tabalaBuscar1: any = { "Buscar": " Busquedar por Codigo Postal", "Qtabla": "colonia","_Columna": "codigopostal","_OrderBY": "descripcion"};
  public valorCp = '';
  public valorColonia = '';
  public msjConfirmacion: object = { visible: false, msjTipo: 1, titulo: '', mensaje: '', detalle: ''};
  //==============================================================================================================
  // Formularios
  public frmDomiclio: FormGroup = this.fb.group({
    id:                      [-1],
    calle:                   [, [Validators.required, Validators.minLength(0)]],
    num_ext:                 [, [Validators.required, Validators.minLength(0)]],
    num_int:                 [, [Validators.required, Validators.minLength(0)]],
    cp:                      [, [Validators.required, Validators.minLength(0)]],
    
    id_municipio:            [-1, [Validators.required, Validators.min(0)]],
    id_localidad:            [-1, [Validators.required, Validators.min(0)]],
    id_estado:               [-1, [Validators.required, Validators.min(0)]],
    id_colonia:              [-1, [Validators.required, Validators.min(0)]],
    id_rh_empleado_registro: [localStorage.getItem('id')]
  });
  //==============================================================================================================
  // listados
  public lstEstado:      any;
  public lstMunicipio:   any;
  public lstLocalidad:   any;
  public lstColonia:     any;
  //==============================================================================================================
  constructor(
    private fb: FormBuilder,
    private servicio: DomiciliosService
    //private datePipe: DatePipe,
  ) {}
  ngOnInit(): void {
    //=========================================================================================================================
    //Consumo de listados estado
    this.servicio.BuscarTB(1,146).subscribe(resp => {this.lstEstado = resp.Detalle;});
   //=========================================================================================================================
 
  }

  public filtroXestado( _valor : any){
    //? ======================================================================================================================
    // cargamos municipios 
    this.servicio.BuscarTB(2,_valor.value).subscribe(resp => {this.lstMunicipio = resp.Detalle;});
    // cargamos localidad
    this.servicio.BuscarTB(4,_valor.value).subscribe(resp => {this.lstLocalidad = resp.Detalle;});
    // cargamos Colonia
    this.servicio.BuscarTB(3,_valor.value).subscribe(resp => {this.lstColonia = resp.Detalle;});
  }
  //==============================================================================================================
  //Modales Codigo postal:
    public visible:        boolean = false;
  //==============================================================================================================
  // Abrir modal para codigo postal
    public abrirCP = () => { this.visible = true;   }
  //==============================================================================================================
  // metdos o funciones de los modales
  public  seleccionarCP ( jsonRes: any ){
    this.valorCp            = jsonRes.codigopostal;
    this.valorColonia       = jsonRes.descripcion;
    console.log(jsonRes);
    // asignamos el valor de lo que seleccionamos en el componente busqueda
    this.frmDomiclio.controls['cp'].setValue(jsonRes.codigopostal);
    this.frmDomiclio.controls['id_colonia'].setValue(jsonRes.id);
    this.visible = false;
  }

  //? ================================================================================================================
  public NuevoDomicilio(){

  }

  public Almacenar(){

    console.log( this.frmDomiclio.value );

    //=======================================================================================
     this.servicio.AlmacenarDomicilio(this.frmDomiclio.value).subscribe(resp => {
      console.log(resp);
      switch (resp.Detalle) {
        case  null:
          Swal.fire(resp.Mensaje,'0 registros','warning');
          break;
        default:
          this.frmDomiclio.setValue(this.frmDomiclio.value);
          this.frmDomiclio.controls['id'].setValue(parseInt(resp.Detalle));
           
          Swal.fire(resp.Mensaje,'Operacion Exitosa');
        break;
      }  
    });
  }
  

}
