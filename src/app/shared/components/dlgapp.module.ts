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
import { AppComponent } from './app/app.component';
import { SuperiorComponent } from './superior/superior.component';


@NgModule({
  declarations: [
    //=================================
    // Importaciones:
    //=================================
    SuperiorComponent,
    AppComponent
  ],
  exports:[
    SuperiorComponent
  ],
  imports: [
    //========================================
    CommonModule,
    MaterialModule,
    //========================================
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
    //{ provide: NgChartsConfiguration, useValue: { generateColors: false } }
  ]
})

export class DlgappModule { }