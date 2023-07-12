import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { VentasService } from './services/Ventas.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MdlBuscarVentas } from './models/mdlBuscarVentas';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  public lstEstatus: any = [{}];
  public BtnSpinner: boolean = false;
  public tbDocVenta: any;
  public tbDocVenta_columns: any;
  public tbDocVenta_value: any;
  public MdlBuscarVentas: MdlBuscarVentas = new MdlBuscarVentas();


  public myForm: FormGroup = this.fb.group({
    fecha1: [ new Date()],
    fecha12:[ new Date()], 
    id_estatus: [0, [ Validators.required, Validators.min(0) ] ]
  });
  
  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private servicio: VentasService
    ) {}
  
    ngOnInit() {
      //=================================
      //carga del listado
      this.servicio.lstEstatus().subscribe(resp => {this.lstEstatus = resp.Detalle._listado_filtro_estatus;});
      //=================================
      //carga del Formulario
      this.myForm = this.fb.group({
        fecha1: new Date(),
        fecha12: new Date(),
        id_estatus: -1
      });
    }

    public btnBuscarVentas() {
     this.BtnSpinner = true;
     this.myForm.controls['fecha1'].setValue(this.datePipe.transform(this.myForm.value.fecha1, 'dd-MM-yyyy'));
     this.myForm.controls['fecha12'].setValue(this.datePipe.transform(this.myForm.value.fecha12, 'dd-MM-yyyy'));
     setTimeout(() => {
      //===============================
      this.servicio.BuscarVentasXfiltro(this.myForm.value).subscribe(resp => {
        switch (resp.Detalle.tb_ventas_por_fecha_limite) {
          case  null:
            Swal.fire(resp.Mensaje,'0 registros','warning');
            break;
          default:
            this.tbDocVenta = resp.Detalle.tb_ventas_por_fecha_limite;
            this.tbDocVenta_columns = Object.keys(this.tbDocVenta[0]);
            console.log(this.tbDocVenta_columns);
          break;
        }  
      });
      //===============================
      this.BtnSpinner = false;
    }, 1000);
   }






   

    public seleccionarFecha1( _fecha: any ) {
     this.myForm.controls['fecha1'].setValue(_fecha.value);
     //this.myForm.controls['fecha1'].setValue(this.datePipe.transform(_fecha.value, 'dd-MM-yyyy'));        
    }
    public seleccionarFecha2( _fecha: any ) {
      this.myForm.controls['fecha12'].setValue(_fecha.value);        
    //  this.myForm.controls['fecha12'].setValue(this.datePipe.transform(_fecha.value, 'dd-MM-yyyy'));        
    }

    public doFilter = (value: any) => {
      this.tbDocVenta = value.target.value.trim().toLocaleLowerCase();
    }
   

}
