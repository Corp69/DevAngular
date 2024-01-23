import { Component } from '@angular/core';
import { LstProveedor } from './Services/LstProveedor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.scss']
})
export class ListadosComponent {

  //============================================================================================================================================================
  // variables vista funcionalidad
  public BtnSpinner: boolean = false;
  public lstestatus: any;
  public DataProveedores: any;


  //============================================================================================================================================================
  // variables para el calendario: 
  public fecha1: Date = new Date();
  public fecha2: Date = new Date();



  public frmLst: FormGroup = this.fb.group({
    fecha1: [new Date(), [Validators.required, Validators.minLength(3)]],
    fecha2: [new Date(), [Validators.required, Validators.minLength(3)]],
    //id_proveedor_estatus: [1, [Validators.required, Validators.minLength(0)]]
  });


  constructor(
    private customerService: LstProveedor,
    private fb: FormBuilder,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
   
  }
  //=============================================================================================================================================================================
  // Gestion de fecha
  public seleccionarFecha1(_fecha: any) {
    this.frmLst.controls['fecha1'].setValue(_fecha.value);
    //this.myForm.controls['fecha1'].setValue(this.datePipe.transform(_fecha.value, 'dd-MM-yyyy'));        
  }
  public seleccionarFecha2(_fecha: any) {
    this.frmLst.controls['fecha12'].setValue(_fecha.value);
    //  this.myForm.controls['fecha12'].setValue(this.datePipe.transform(_fecha.value, 'dd-MM-yyyy'));        
  }
  //=============================================================================================================================================================================
  // Acciones en la vista
  public NuevofrmBuscar = () => {
    this.frmLst = this.fb.group({
      fecha1: [new Date(), [Validators.required, Validators.minLength(3)]],
      fecha12: [new Date(), [Validators.required, Validators.minLength(3)]]
    });
  }

  public btnBuscar() {
    this.BtnSpinner = true;
    this.frmLst.controls['fecha1'].setValue(this.datePipe.transform(this.frmLst.value.fecha1, 'dd-MM-yyyy'));
    this.frmLst.controls['fecha12'].setValue(this.datePipe.transform(this.frmLst.value.fecha12, 'dd-MM-yyyy'));
    setTimeout(() => {
      //===============================
      this.customerService.BusquedaXfecha(this.frmLst.value).subscribe(resp => {
        switch (resp.Detalle) {
          case null:
            //Swal.fire(resp.Mensaje,'0 registros','warning');
            break;
          default:
            this.DataProveedores = resp.Detalle._proveedoresxfecha; 
          break;
        }
      });
      //===============================
      this.BtnSpinner = false;
      this.NuevofrmBuscar();
    }, 1000);
  }
  //=============================================================================================================================================================================
  Nuevo(){

  }

  Buscar(){


  }



}
