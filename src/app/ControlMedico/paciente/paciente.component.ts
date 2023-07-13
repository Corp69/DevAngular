import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdlPaciente } from './Models/MdlPaciente';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  public BtnSpinner: boolean = false;
  public lstSexo: any;

  public MdlPaciente: MdlPaciente = new MdlPaciente();
  public frmPaciente: FormGroup = this.fb.group({
    id: [-1],
    curp: [, [Validators.required, Validators.min(0)]],
    nombre: [, [Validators.required, Validators.min(0)]],
    paterno: [, [Validators.required, Validators.min(0)]],
    materno: [, [Validators.required, Validators.min(0)]],
    tipo_sanguineo: [, [Validators.required, Validators.min(0)]],
    numero: [, [Validators.required, Validators.min(0)]],
    ficha: [, [Validators.required, Validators.min(0)]],
    discapacidad: [, [Validators.required, Validators.min(0)]],
    paciente: [, [Validators.required, Validators.min(0)]],
    telefono: [, [Validators.required, Validators.min(0)]],
    id_cg_sexo: [-1],
    calle: [, [Validators.required, Validators.min(0)]],
    fechanaci: [new Date()],
    numeroext: [, [Validators.required, Validators.min(0)]],
    cp: [, [Validators.required, Validators.min(0)]],
    ocupacion: [, [Validators.required, Validators.min(0)]],
    correo: [, [Validators.required, Validators.min(0)]],
    medicacion: [, [Validators.required, Validators.min(0)]],
    notas: [, [Validators.required, Validators.min(0)]],
    id_cliente: [-1]
  });


  constructor(
    private fb: FormBuilder,
    //private datePipe: DatePipe,
    //private servicio: VentasService
  ) {
    
  }

  public btnAlmacenar() {

  }

  ngOnInit() {
    //? ======================================================
    // seteamos los valores al formulario
    this.frmPaciente.setValue(this.MdlPaciente);
    //=================================
    //carga del listado
    //this.servicio.lstEstatus().subscribe(resp => {this.lstEstatus = resp.Detalle._listado_filtro_estatus;});
  }


  public btnBuscarVentas() {
    this.BtnSpinner = true;
    // this.myForm.controls['fecha1'].setValue(this.datePipe.transform(this.myForm.value.fecha1, 'dd-MM-yyyy'));
    // this.myForm.controls['fecha12'].setValue(this.datePipe.transform(this.myForm.value.fecha12, 'dd-MM-yyyy'));
    setTimeout(() => {
      //===============================
      //  this.servicio.BuscarVentasXfiltro(this.myForm.value).subscribe(resp => {
      //    switch (resp.Detalle.tb_ventas_por_fecha_limite) {
      //      case  null:
      //        Swal.fire(resp.Mensaje,'0 registros','warning');
      //        break;
      //      default:
      //        this.tbDocVenta = resp.Detalle.tb_ventas_por_fecha_limite;
      //        this.tbDocVenta_columns = Object.keys(this.tbDocVenta[0]);
      //        console.log(this.tbDocVenta_columns);
      //      break;
      //    }  
      //  });
      //===============================
      this.BtnSpinner = false;
    }, 1000);
  }








}
