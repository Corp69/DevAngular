import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ControlMedicoRoutingModule } from './ControlMedico-routing.module';
import { MaterialModule } from '../material/material.module';
import { PrincipalComponent } from './principal/principal.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    HomeComponent,
    PacienteComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatTableModule,
    ControlMedicoRoutingModule
  ]
})
export class ControlMedicoModule { }
