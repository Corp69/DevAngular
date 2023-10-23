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
  // Tabla sat Codigo Postal:
  /**
   * @variable valorBUsqueda:   => muestra unicamente la busqueda el resultado.
   * @variable tabalaBuscar1:   => se asigna Objeto Json para buscar dinamicamente
   */
  public tabalaBuscar1: any = {  "Qtabla": "colonia","_Columna": "codigopostal","_OrderBY": "descripcion"};
  public valorBUsqueda = '';
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
    this.servicio.BuscarTB(1,146).subscribe(resp => {this.lstEstado = resp.Detalle;
      console.log(resp)
    });
   //=========================================================================================================================
 
  }

  public filtroXestado( _valor : any){
    //? ======================================================================================================================
    // cargamos municipios 
    this.servicio.BuscarTB(2,_valor.value).subscribe(resp => {this.lstMunicipio = resp.Detalle;});
    // cargamos localidad
    this.servicio.BuscarTB(3,_valor.value).subscribe(resp => {this.lstLocalidad = resp.Detalle;});
    // cargamos Colonia
    this.servicio.BuscarTB(3,_valor.value).subscribe(resp => {this.lstColonia = resp.Detalle;});
  }
  //==============================================================================================================
  //Modales Codigo postal:
    public visible:        boolean = false;
  //==============================================================================================================
  // Abrir modal para codigo postal
    public abrirCP       = () => { this.visible = true;   }
  //==============================================================================================================
  // metdos o funciones de los modales
  public  seleccionarCP ( jsonRes: any ){
    this.valorBUsqueda = jsonRes.descripcion;
    //this.frmProveedor.controls['id_sat_usocfdi'].setValue(parseInt(jsonSatUsoCFDI.id));
    this.visible = false;
  }

  
  public NuevoProvedor(){

  }

  

}
