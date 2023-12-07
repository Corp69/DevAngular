import { ChangeDetectorRef, Component } from '@angular/core';
import { PickList } from 'primeng/picklist';
import { ViewChild } from '@angular/core';
import { ImpuestosEstatales } from './Interface/impuestos_estatales';
import { ActivatedRoute } from '@angular/router';
import { ImpuestosEstatalService } from './Services/ImpuestosEstatalService.service';


@Component({
  selector: 'app-ImpuestosEstatales',
  templateUrl: './ImpuestosEstatales.component.html',
  styleUrls: ['./ImpuestosEstatales.component.scss']
})
export class ImpuestosEstatalesComponent {

  //==============================================================================================================
  //Config. de la app: Bloqueo de botones
  public BtnSpinner: boolean = false;
  public Idproducto: number = -1;

 public DisponiblesImpuestosEstatales!: ImpuestosEstatales[];
 public AsignadosImpuestosEstatales!: ImpuestosEstatales[];
 
  @ViewChild(PickList) picklist: any;


  constructor(
    private route: ActivatedRoute,
    private servicio: ImpuestosEstatalService,
    private cdr: ChangeDetectorRef
    //private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    //=========================================================================================================================
    //carga impuestos
    this.route.params.subscribe(params => {
      if (+params['id'] > -1) {
        this.Idproducto = +params['id']; 
        console.log(this.Idproducto);
        // AGREGAMOS LA INFORMACION AL FORMULARIO
        this.servicio.Datainfo(+params['id']).subscribe(resp => {
          this.DisponiblesImpuestosEstatales = resp.Detalle.app_producto_servicios_impuestos_estatales._impuesto_disponibles;
          this.AsignadosImpuestosEstatales = resp.Detalle.app_producto_servicios_impuestos_estatales._impuesto_asignado;       
       });
      }
    });
  }

  onMoveToTarget(event: any) {
    let IdsAgregar = event.items.map((item: { id: any; }) => item.id);
  this.servicio.AsignarIds(
    'app_producto_servicios_impuestos_estatales',
    'id_app_producto_servicios',
    this.Idproducto,
    'id_app_impuestos_estatales',
    IdsAgregar
  ).subscribe(resp => {
   console.log( resp );
  });
}

onMoveToSource(event: any) {
  let IdsEliminar = event.items.map((item: { id: any; }) => item.id);
  
  this.servicio.EliminarIds(
    'app_producto_servicios_impuestos_estatales',
    'id_app_producto_servicios',
    this.Idproducto,
    'id_app_impuestos_estatales',
    IdsEliminar
  ).subscribe(resp => {
   console.log( resp );
  });

}



onMoveAllToTarget(event: any) {
  let IdsAgregar = event.items.map((item: { id: any; }) => item.id);
  this.servicio.AsignarIds(
    'app_producto_servicios_impuestos_estatales',
    'id_app_producto_servicios',
    this.Idproducto,
    'id_app_impuestos_estatales',
    IdsAgregar
  ).subscribe(resp => {
   console.log( resp );
  });

}

onMoveAllToSource(event: any) {
  let IdsEliminar = event.items.map((item: { id: any; }) => item.id);
  
  this.servicio.EliminarIds(
    'app_producto_servicios_impuestos_estatales',
    'id_app_producto_servicios',
    this.Idproducto,
    'id_app_impuestos_estatales',
    IdsEliminar
  ).subscribe(resp => {
   console.log( resp );
  });


}
}
