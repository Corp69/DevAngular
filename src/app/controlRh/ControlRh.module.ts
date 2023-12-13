import { NgModule } from '@angular/core';
import { EmpleadoComponent } from './empleado/empleado.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { PuestoComponent } from './puesto/puesto.component';
import { ControlRhRoutingModule } from './ControlRhRoutingModule.module';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//=======================================
//! modulos personalizados Librerias 
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
//=======================================
//? modulos personalizados reutilizar codigo 
import { DlgappModule } from '../shared/components/DlgappModule.module';
import { IMSSComponent } from './IMSS/IMSS.component';

@NgModule({
  declarations: [
    EmpleadoComponent,
    DepartamentoComponent,
    PuestoComponent,
    IMSSComponent
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
