import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImpuestosFederales } from './Interface/ImpuestosFederales';
import { PickList } from 'primeng/picklist';
import { ViewChild } from '@angular/core';
import { ImpuestosFederalesService } from './Services/ImpuestosFederalesService.service';

@Component({
  selector: 'app-ImpuestosFederales',
  templateUrl: './ImpuestosFederales.component.html',
  styleUrls: ['./ImpuestosFederales.component.scss']
})
export class ImpuestosFederalesComponent {

  //==============================================================================================================
  //Config. de la app: Bloqueo de botones
  public BtnSpinner: boolean = false;
  public Idproducto: number = -1;

  public DisponiblesImpuestosFederales!: ImpuestosFederales[];
  public AsignadosImpuestosFederales!: ImpuestosFederales[];

  @ViewChild(PickList) picklist: any;


  constructor(
    private route: ActivatedRoute,
    private servicio: ImpuestosFederalesService,
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
          this.DisponiblesImpuestosFederales = resp.Detalle.app_producto_servicios_impuestos_federales._impuesto_disponibles;
          this.AsignadosImpuestosFederales = resp.Detalle.app_producto_servicios_impuestos_federales._impuesto_asignado;
        });
      }
    });
  }

  onMoveToTarget(event: any) {
    let IdsAgregar = event.items.map((item: { id: any; }) => item.id);
    this.servicio.AsignarIds(
      'app_producto_servicios_impuestos_federales',
      'id_app_producto_servicios',
      this.Idproducto,
      'id_app_impuestos_federales',
      IdsAgregar
    ).subscribe(resp => {});
  }

  onMoveToSource(event: any) {
    let IdsEliminar = event.items.map((item: { id: any; }) => item.id);
    this.servicio.EliminarIds(
      'app_producto_servicios_impuestos_federales',
      'id_app_producto_servicios',
      this.Idproducto,
      'id_app_impuestos_federales',
      IdsEliminar
    ).subscribe(resp => {});
  }



  onMoveAllToTarget(event: any) {
    let IdsAgregar = event.items.map((item: { id: any; }) => item.id);
    this.servicio.AsignarIds(
      'app_producto_servicios_impuestos_federales',
      'id_app_producto_servicios',
      this.Idproducto,
      'id_app_impuestos_federales',
      IdsAgregar
    ).subscribe(resp => {});
  }

  onMoveAllToSource(event: any) {
    let IdsEliminar = event.items.map((item: { id: any; }) => item.id);
    this.servicio.EliminarIds(
      'app_producto_servicios_impuestos_federales',
      'id_app_producto_servicios',
      this.Idproducto,
      'id_app_impuestos_federales',
      IdsEliminar
    ).subscribe(resp => {});
  }



}
