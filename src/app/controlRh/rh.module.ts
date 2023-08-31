import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { PuestoComponent } from './puesto/puesto.component';
import { ContratosComponent } from './contratos/contratos.component';
import { HistorialComponent } from './historial/historial.component';
import { SalariosComponent } from './salarios/salarios.component';
import { AsistenciasComponent } from './asistencias/asistencias.component';
import { PrincipalComponent } from './principal/principal.component';
import { ControlRhRoutingModule } from './ControlRhRoutingModule.module';
//========================================
// PrimeNG 
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
//========================================
//Fechas: Angular Material
import { CommonModule, DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    EmpleadoComponent,
    AlmacenesComponent,
    DepartamentoComponent,
    PuestoComponent,
    ContratosComponent,
    HistorialComponent,
    SalariosComponent,
    AsistenciasComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    ControlRhRoutingModule,
    MatIconModule,
    //========================================
    //Fechas: Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    //========================================
    CommonModule,
    MaterialModule,
    //========================================
    //Tablas: Angular PrimeNG 
    TableModule,
    TabMenuModule,
    TabViewModule,
    //Cards: Angular PrimeNG 
    CardModule


  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})
export class RhModule { }
