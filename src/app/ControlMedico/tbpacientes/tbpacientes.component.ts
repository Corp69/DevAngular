import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdlBuscarPacientes } from './Models/MdlBuscarPacientes';
import { PacientesService } from './Services/Pacientes.service';

@Component({
  selector: 'app-tbpacientes',
  templateUrl: './tbpacientes.component.html',
  styleUrls: ['./tbpacientes.component.scss']
})
export class TbpacientesComponent {
  public lstEstatus: any = [{}];
  public BtnSpinner: boolean = false;
  public tbDocVenta: any;
  public tbDocVenta_columns: any;
  public tbDocVenta_value: any;
  public MdlBuscarVentas: MdlBuscarPacientes = new MdlBuscarPacientes();


  public myForm: FormGroup = this.fb.group({
    fecha1: [ new Date()],
    fecha12:[ new Date()]
  });

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private servicio: PacientesService
    ) {}
  
    public seleccionarFecha1( _fecha: any ) {
      this.myForm.controls['fecha1'].setValue(_fecha.value);
      //this.myForm.controls['fecha1'].setValue(this.datePipe.transform(_fecha.value, 'dd-MM-yyyy'));        
     }
     public seleccionarFecha2( _fecha: any ) {
       this.myForm.controls['fecha12'].setValue(_fecha.value);        
     //  this.myForm.controls['fecha12'].setValue(this.datePipe.transform(_fecha.value, 'dd-MM-yyyy'));        
     }


     public btnBuscarPacientes() {
      this.BtnSpinner = true;
      this.myForm.controls['fecha1'].setValue(this.datePipe.transform(this.myForm.value.fecha1, 'dd-MM-yyyy'));
      this.myForm.controls['fecha12'].setValue(this.datePipe.transform(this.myForm.value.fecha12, 'dd-MM-yyyy'));
      setTimeout(() => {
       //===============================
       this.servicio.PacientesXFecha(this.myForm.value).subscribe(resp => {
         switch (resp.Detalle.tb_pacientes_por_fecha_limite) {
           case  null:
             break;
           default:
             this.tbDocVenta = resp.Detalle.tb_pacientes_por_fecha_limite;
             this.tbDocVenta_columns = Object.keys(this.tbDocVenta[0]);
             console.log(this.tbDocVenta_columns);
           break;
         }  
       });
       //===============================
       this.BtnSpinner = false;
     }, 1000);
    }


}
