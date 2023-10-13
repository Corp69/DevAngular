import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from './Services/Empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent {
  
  //==============================================================================================================
  // Listados:
  public lstestatus:          any;
  public lstSexo:             any;
  public lstclasificacion:    any;
  public lstGrado:            any;
  public lstPuestos:          any;
  public lstDepartamento:     any;
  //==============================================================================================================
  // Formularios
  public frmEmpleado: FormGroup = this.fb.group({
    id: [-1],
    nombre: [, [Validators.required, Validators.minLength(3)]],
    paterno: [, [Validators.required, Validators.minLength(3)]],
    materno: [, [Validators.required, Validators.minLength(3)]],
    codigo: [, [Validators.required, Validators.minLength(3)]],
    correo: [, [Validators.required, Validators.minLength(3)]],
    cuenta_banco: [, [Validators.required, Validators.minLength(3)]],
    clabe: [, [Validators.required, Validators.minLength(3)]],
    whatsapp: [, [Validators.required, Validators.minLength(3)]],
    observaciones: [, [Validators.required, Validators.minLength(3)]],
    contacto1: [, [Validators.required, Validators.minLength(3)]],
    contacto2: [, [Validators.required, Validators.minLength(3)]],
    nss: [, [Validators.required, Validators.minLength(3)]],
    rfc: [, [Validators.required, Validators.minLength(3)]],
    curp: [, [Validators.required, Validators.minLength(3)]],
    fecha_nacimiento: [ new Date()],
    fecha_ingreso: [ new Date()],
    id_rh_puesto: [-1, [Validators.required, Validators.min(0)]],
    id_sexo: [-1, [Validators.required, Validators.min(0)]],
    id_rh_estatus: [-1, [Validators.required, Validators.min(0)]],
    id_rh_grado: [-1, [Validators.required, Validators.min(0)]],
    id_rh_clasificacion: [-1, [Validators.required, Validators.min(0)]]
  });
  //==============================================================================================================
  constructor(
    private fb: FormBuilder,
    private servicio: EmpleadoService
    //private datePipe: DatePipe,
  ) {

  }

  ngOnInit() {
    //=========================================================================================================================
    //Consumo de listados
     this.servicio.listSexo().subscribe(resp => {this.lstSexo = resp.Detalle;});
     this.servicio.listEstatus().subscribe(resp => {this.lstestatus = resp.Detalle;});
     this.servicio.listClasificacion().subscribe(resp => {this.lstclasificacion = resp.Detalle;});
     this.servicio.listGrado().subscribe(resp => {this.lstGrado = resp.Detalle;});
     this.servicio.listPuestos(-1).subscribe(resp => {this.lstPuestos = resp.Detalle;});
     this.servicio.listDepartamentos().subscribe(resp => {this.lstDepartamento = resp.Detalle;});
    //=========================================================================================================================
    }

    public DepartamentoFiltro ( id: any){
      console.log( id );
      this.servicio.listPuestos(id).subscribe(resp => {this.lstPuestos = resp.Detalle;});
     
    }



  public Almacenar(){
    
  }
  public NuevoProvedor(){

  }



}
