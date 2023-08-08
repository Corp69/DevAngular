import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ControlMedicoRoutingModule } from './ControlMedico-routing.module';
import { MaterialModule } from '../material/material.module';
import { PrincipalComponent } from './principal/principal.component';
import { MatTableModule } from '@angular/material/table';
import { NutridatosBasicosComponent } from './nutridatosbasicos/nutridatosbasicos.component';
import { NutripacientediametrosComponent } from './nutripacientediametros/nutripacientediametros.component';
import { NutripacienteplieguesComponent } from './nutripacientepliegues/nutripacientepliegues.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { TbpacientesComponent } from './tbpacientes/tbpacientes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GraficosResultadosComponent } from './GraficosResultados/GraficosResultados.component';
//========================================
//Angular Graficos
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { GraficosDetalleComponent } from './GraficosDetalle/GraficosDetalle.component';
import { SuperiorComponent } from '../shared/components/superior/superior.component';


@NgModule({
  declarations: [
    HomeComponent,
    PacienteComponent,
    PrincipalComponent,
    NutridatosBasicosComponent,
    NutripacientediametrosComponent,
    NutripacienteplieguesComponent,
    TbpacientesComponent,
    GraficosResultadosComponent,
    GraficosDetalleComponent,
    //=================================
    // Importaciones:
    SuperiorComponent
    //=================================
  ],
  imports: [
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
    ControlMedicoRoutingModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: NgChartsConfiguration, useValue: { generateColors: false } }
  ]
})
export class ControlMedicoModule { }
