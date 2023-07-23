import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
//========================================
//Angular Graficos
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { InvProductoComponent } from './inv-producto/invproducto.component';
import { ControlInventariosRoutingModule } from './ControlInventarios-routing.module';
import { SatprodservComponent } from './satprodserv/satprodserv.component';

@NgModule({
  declarations: [
    InvProductoComponent,
    SatprodservComponent
  ],
  imports: [
    CommonModule,
     //========================================
    //Angular Graficos
    NgChartsModule,
    //========================================
    //Fechas: Angular Material
    MatFormFieldModule,
    MatInputModule, 
    MatNativeDateModule, 
    MatDatepickerModule,
    //========================================
    CommonModule,
    MaterialModule,
    MatTableModule,
     //========================================
     MatCardModule,
     MaterialModule,
     ReactiveFormsModule,
     ControlInventariosRoutingModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ]
})
export class ControlInventariosModule { }
