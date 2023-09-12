import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { MaterialModule } from '../material/material.module';
import { ControlEmpresaRoutingModule } from './ControlEmpresa-routing.module';
import { SuperiorComponent } from '../shared/components/superior/superior.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgChartsConfiguration } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    SucursalComponent,
    EmpresaComponent
    //=================================
    // Importaciones:
    //=================================
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ControlEmpresaRoutingModule,
    ReactiveFormsModule
  ],

  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: NgChartsConfiguration, useValue: { generateColors: false } }
  ]

})
export class ControlEmpresaModule { }
