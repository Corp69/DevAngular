import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { impuestos_estatales } from './Interface/impuestos_estatales';
import { impuestos_federales } from './Interface/impuestos_federales';
import { ActivatedRoute } from '@angular/router';
import { ImpuestosProductoServicio } from './Services/ImpuestosProductoServicio.service';
import { PickList } from 'primeng/picklist';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-ImpuestosProductoServicio',
  templateUrl: './ImpuestosProductoServicio.component.html',
  styleUrls: ['./ImpuestosProductoServicio.component.scss']
})
export class ImpuestosProductoServicioComponent implements OnInit {

  //==============================================================================================================
  //Config. de la app: Bloqueo de botones
  public BtnSpinner: boolean = false;
  public Idproducto: number = -1;

  sourceImpuestosEstatales!: impuestos_estatales[];
  targetImpuestosEstatales!: impuestos_estatales[];
  
  DisponiblesImpuestosEstatales!: impuestos_estatales[];
  AsignadosImpuestosEstatales!: impuestos_estatales[];

  sourceImpuestosFederales!: impuestos_federales[];
  targetImpuestosFederales!: impuestos_federales[];



  @ViewChild(PickList) picklist: any;


  constructor(
    private route: ActivatedRoute,
    private servicio: ImpuestosProductoServicio,
    private cdr: ChangeDetectorRef
    //private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    //=========================================================================================================================
    //carga impuestos
    this.route.params.subscribe(params => {
      if (+params['id'] > -1) {
        this.Idproducto = +params['id']; 
        // AGREGAMOS LA INFORMACION AL FORMULARIO
        this.servicio.Datainfo(+params['id']).subscribe(resp => {
          this.sourceImpuestosEstatales = resp.Detalle.app_producto_servicios_impuestos_estatales._impuesto_disponibles;
          this.targetImpuestosEstatales = resp.Detalle.app_producto_servicios_impuestos_estatales._impuesto_asignado;
          
          this.DisponiblesImpuestosEstatales = resp.Detalle.app_producto_servicios_impuestos_estatales._impuesto_disponibles;
          this.AsignadosImpuestosEstatales = resp.Detalle.app_producto_servicios_impuestos_estatales._impuesto_asignado;
       
       
        });
      }
    });
  }


  public Almacenar() {
    let idsDisponibles: number[] = this.sourceImpuestosEstatales.map(item => item.id).filter(id => id !== undefined) as number[];
    let idsAsignados: number[] = this.targetImpuestosEstatales.map(item => item.id).filter(id => id !== undefined) as number[];

    let IdsAgregar:number[] =[];
    let IdsEliminar:number[] =[]; 

    console.log('disponibles',idsDisponibles);
    console.log('asignados', idsAsignados);
    
    // Filtrar elementos en disponibles que no están en asignados
     IdsAgregar = idsDisponibles.filter(numero => !idsAsignados.includes(numero));
     IdsEliminar = idsDisponibles.filter(numero => !idsDisponibles.includes(numero));
    

    console.log("idsAgregar:", IdsAgregar);
    console.log("IdsEliminar:", IdsEliminar);
 


    this.servicio.AsignarIds(
      'app_producto_servicios_impuestos_estatales',
      'id_app_producto_servicios',
      this.Idproducto,
      'id_app_impuestos_estatales',
      idsAsignados
    ).subscribe(resp => {
     
    });



  }


  onMoveToTarget(event: any) {
    console.log('Elementos movidos a la lista objetivo', event.items);
    console.log('Lista de origen después de la transferencia', event.source);
    console.log('Lista de destino después de la transferencia', event.target);
}

onMoveToSource(event: any) {
    console.log('Elementos movidos a la lista de origen', event.items);
    console.log('Lista de origen después de la transferencia', event.source);
    console.log('Lista de destino después de la transferencia', event.target);
}



onMoveAllToTarget(event: any) {
  console.log('Elementos movidos a la lista de origen', event.items);
  console.log('hola');
}

onMoveAllToSource(event: any) {
  console.log('Elementos movidos a la lista de origen', event.items);
  console.log('hola');
}



}
