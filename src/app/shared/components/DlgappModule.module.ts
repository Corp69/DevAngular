import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
//========================================
//Angular Graficos
//import { NgChartsConfiguration } from 'ng2-charts';
//========================================
//Angular Material
import { dlgBusquedasModuleRoutingModule } from './DlgappModule-routing.module';
import { ClaveProdServcpComponent } from './Sat/ClaveProdServcp/ClaveProdServcp.component';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DomiciliosComponent } from './domicilios/domicilios.component';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ConfirmacionComponent } from './msj/confirmacion/confirmacion.component';
import { PrimeNgModule } from '../Modulos/PrimeNgModule.module';
import { ImpuestosFederalesComponent } from './impuestos-federales/ImpuestosFederales.component';
import { ImpuestosEstatalesComponent } from './ImpuestosEstatales/ImpuestosEstatales.component';


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
    ImpuestosEstatalesComponent
  ],
  exports:[
    ClaveProdServcpComponent,
    BusquedaComponent,
    ConfirmacionComponent,
    ImpuestosEstatalesComponent,
    ImpuestosFederalesComponent
  ],
  imports: [
    //========================================
    CommonModule,
    PrimeNgModule,
    //========================================
    ReactiveFormsModule,
    dlgBusquedasModuleRoutingModule,
    //========================================
    //Tablas: Angular PrimeNG 
    TableModule,
    TabMenuModule,
    TabViewModule,
    //Cards: Angular PrimeNG 
    CardModule,
    //dialogo o modal: Angular PrimeNG 
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
    //{ provide: NgChartsConfiguration, useValue: { generateColors: false } }
  ]
})

export class DlgappModule { }