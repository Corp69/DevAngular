import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuscarService } from './Service/BuscarService.service';
import { DatePipe } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class BusquedaComponent implements OnInit {
  //bloqueo de botones
  public isLoading: boolean = false;
  //==============================================================================================================
  // Listados:
  public lstestatus: any;  
  //formulario 
  public frm: FormGroup = this.fb.group({ 
    fechainicia:  [new Date()],
    fechatermina: [new Date()],
    id_estatus:   [1]
  });
  //tabla   
  public DataSource: any;
  public DataSourceColumnas: any;
  //=================================================================================================================
  // variables entre componentes
  @Input()
  public JsonReq: any;
  // tabla buscar
  public tablaBusqueda: String  = ""; 
  //emite al padr el valor
  @Output() JsonRes = new EventEmitter<any>();
  //=================================================================================================================

  constructor(
    private fb: FormBuilder, 
    private servicio: BuscarService,
    private datePipe: DatePipe,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ) {
  }

  //carga de los componentes 
  ngOnInit() {
   this.servicio.listEstatus().subscribe(resp => { this.lstestatus = resp.Detalle; });
   this.tablaBusqueda = this.JsonReq.Qtabla; 
  }

  //Realizamos la busqueda
  public buscarinfo = () =>{

    //bloqeamos botones
    this.isLoading = true;
    this.DataSource = []; 
    this.DataSourceColumnas = [];

    // instancia de fechas y eliminar los errores en consola
    let fecha1:   Date =this.frm.value.fechainicia;
    let fecha2:   Date =this.frm.value.fechatermina;
    let idstatus: number = this.frm.value.id_estatus;
    //set de fechas al formulario 
    this.frm.controls['fechainicia'].setValue(this.datePipe.transform(this.frm.value.fechainicia, 'dd-MM-yyyy'));
    this.frm.controls['fechatermina'].setValue(this.datePipe.transform(this.frm.value.fechatermina, 'dd-MM-yyyy'));
    // busqueda al servicio
    this.servicio.Buscar(this.JsonReq._schema, this.JsonReq._funcion, this.frm.value).subscribe(resp => {
      switch (resp.Detalle.lstproductos) {
        case  null:
          break;
        default:
          //tomamos los valores para generar la tabla 
          this.DataSource = resp.Detalle.lstproductos;
          this.DataSourceColumnas = Object.keys(this.DataSource[0]);
        break;
      }  
    });
    this.frm.reset({ fechainicia: fecha1,  fechatermina: fecha2, id_estatus: idstatus });
    this.isLoading = false;
  }

  // reset al formulario
  public Nuevainfo = () =>{
    this.isLoading = true;
      this.frm.reset({ 
        fechainicia: new Date(), 
        fechatermina: new Date(), 
        id_estatus:   [1]
      });
    this.isLoading = false;
  }
  //==============================================================================================================
  // funcionalidad de la tabla: metodo para emitir la seleccion de un registro
  /*public onSelectionChange( args: any){
    this.DataSource = null;
    this.JsonRes.emit(args[0]);
  }
  */
  //=============================================================================================================
  //obtenemos las columnas
  public Obtenervalor = (obj: any): any[] => { 
    return Object.values(obj);
  }

  //==============================================================================================================
  // obtener todos los registros
   public onSelectAllChange( args: any){
    console.log( args )
    this.JsonRes = args;
  }
  
  //==============================================================================================================
  // obtener todos los registros
   public eliminar( args: any){
    console.log( args )
   // this.JsonRes = args;
  }

  //==============================================================================================================
  // obtener todos los registros
   public modificar ( args: any){
    this.DataSource = null;
    this.JsonRes.emit(args);
  }

  //==============================================================================================================
  // obtener todos los registros
  public confirm2(args: any) {
    console.log(args);
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}


}
