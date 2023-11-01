import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PacienteComponent } from './paciente/paciente.component';
import { ControlMedicoRoutingModule } from './ControlMedico-routing.module';
import { NutridatosBasicosComponent } from './nutridatosbasicos/nutridatosbasicos.component';
import { NutripacientediametrosComponent } from './nutripacientediametros/nutripacientediametros.component';
import { NutripacienteplieguesComponent } from './nutripacientepliegues/nutripacientepliegues.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TbpacientesComponent } from './tbpacientes/tbpacientes.component';
import { GraficosResultadosComponent } from './GraficosResultados/GraficosResultados.component';
import { GraficosDetalleComponent } from './GraficosDetalle/GraficosDetalle.component';
//=======================================
//! modulos personalizados Librerias 
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
import { MaterialModule } from '../shared/Modulos/material/material.module';
import { PrimeNgKpisModule } from '../shared/Modulos/PrimeNgKpisModule.module';
//=======================================
//? modulos personalizados reutilizar codigo 
import { DlgappModule } from '../shared/components/DlgappModule.module';


@NgModule({
  declarations: [
    PacienteComponent,
    NutridatosBasicosComponent,
    NutripacientediametrosComponent,
    NutripacienteplieguesComponent,
    TbpacientesComponent,
    GraficosResultadosComponent,
    GraficosDetalleComponent
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
    PrimeNgKpisModule,
    //=======================================
    // routing
    ControlMedicoRoutingModule
  ],
  providers: [
    DatePipe
  ]
})
export class ControlMedicoModule { }
