import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
//========================================
//Angular Graficos
//import { NgChartsConfiguration } from 'ng2-charts';
//========================================
//Angular Material
import { MaterialModule } from 'src/app/material/material.module';
import { dlgBusquedasModuleRoutingModule } from './DlgappModule-routing.module';
import { HomeComponent } from './home/home.component';
import { RegimenFiscalComponent } from './Sat/regimen-fiscal/regimen-fiscal.component';
import { ClaveProdServcpComponent } from './Sat/ClaveProdServcp/ClaveProdServcp.component';


@NgModule({
  declarations: [
    //=================================
    // Importaciones:
    //=================================
  
    HomeComponent,
    RegimenFiscalComponent,
    ClaveProdServcpComponent
  ],
  exports:[

  ],
  imports: [
    //========================================
    CommonModule,
    MaterialModule,
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