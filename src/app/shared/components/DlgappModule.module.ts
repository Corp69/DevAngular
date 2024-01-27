import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { dlgBusquedasModuleRoutingModule } from './DlgappModule-routing.module';
import { ClaveProdServcpComponent } from './Sat/ClaveProdServcp/ClaveProdServcp.component';
import { DomiciliosComponent } from './domicilios/domicilios.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ConfirmacionComponent } from './msj/confirmacion/confirmacion.component';
import { PrimeNgModule } from '../Modulos/PrimeNgModule.module';
import { ImpuestosFederalesComponent } from './impuestos-federales/ImpuestosFederales.component';
import { ImpuestosEstatalesComponent } from './ImpuestosEstatales/ImpuestosEstatales.component';
import { ListadosComponent } from './listados/listados.component';
import { MsjEliminarComponent } from './msj-eliminar/MsjEliminar.component';


@NgModule({
  declarations: [
    //=================================
    // Importaciones:
    //=================================
    ClaveProdServcpComponent,
    DomiciliosComponent,
    BusquedaComponent,
    ConfirmacionComponent,
    ImpuestosFederalesComponent,
    ImpuestosEstatalesComponent,
    ListadosComponent,
    MsjEliminarComponent
  ],
  exports:[
    ClaveProdServcpComponent,
    BusquedaComponent,
    ConfirmacionComponent,
    ImpuestosEstatalesComponent,
    ImpuestosFederalesComponent,
    ListadosComponent,
    MsjEliminarComponent
  ],
  imports: [
    //========================================
    CommonModule,
    PrimeNgModule,
    //========================================
    ReactiveFormsModule,
    dlgBusquedasModuleRoutingModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
    //{ provide: NgChartsConfiguration, useValue: { generateColors: false } }
  ]
})

export class DlgappModule { }