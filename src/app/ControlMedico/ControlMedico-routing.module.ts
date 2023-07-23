import { NgModule } from '@angular/core';
import { PacienteComponent } from './paciente/paciente.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { NutridatosBasicosComponent } from './nutridatosbasicos/nutridatosbasicos.component';
import { NutripacientediametrosComponent } from './nutripacientediametros/nutripacientediametros.component';
import { NutripacienteplieguesComponent } from './nutripacientepliegues/nutripacientepliegues.component';
import { TbpacientesComponent } from './tbpacientes/tbpacientes.component';
import { GraficosResultadosComponent } from './GraficosResultados/GraficosResultados.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      //=====================================================================================
      { path: 'pacientes',    component: TbpacientesComponent },
      { path: 'paciente/:id', component: PacienteComponent },
      //=====================================================================================
      //? Nutricion
      { path: 'infoBasicos',   component: NutridatosBasicosComponent },
      { path: 'infoDiametros', component: NutripacientediametrosComponent },
      { path: 'infoPligues',   component: NutripacienteplieguesComponent },
      //=====================================================================================
      { path: 'Principal',     component: PrincipalComponent },
      //=====================================================================================
      //? Nutricion
      { path: 'resultados/:id',component: GraficosResultadosComponent },
      { path: '**', redirectTo: 'pacientes' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ControlMedicoRoutingModule { }
