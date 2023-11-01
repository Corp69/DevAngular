import { NgModule } from '@angular/core';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { PuestoComponent } from './puesto/puesto.component';
import { ContratosComponent } from './contratos/contratos.component';
import { HistorialComponent } from './historial/historial.component';
import { SalariosComponent } from './salarios/salarios.component';
import { AsistenciasComponent } from './asistencias/asistencias.component';
import { ControlRhRoutingModule } from './ControlRhRoutingModule.module';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//=======================================
//! modulos personalizados Librerias 
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
import { MaterialModule } from '../shared/Modulos/material/material.module';
//=======================================
//? modulos personalizados reutilizar codigo 
import { DlgappModule } from '../shared/components/DlgappModule.module';

@NgModule({
  declarations: [
    EmpleadoComponent,
    AlmacenesComponent,
    DepartamentoComponent,
    PuestoComponent,
    ContratosComponent,
    HistorialComponent,
    SalariosComponent,
    AsistenciasComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //=======================================
    //? modulos personalizados reutilizar codigo 
    DlgappModule,
    //=======================================
    //! modulos personalizados Librerias 
    PrimeNgModule,
    MaterialModule,
    //PrimeNgKpisModule,
    //=======================================
    // routing
    ControlRhRoutingModule
  ],
  providers: [
    DatePipe
  ]
})
export class ControlRh { }
