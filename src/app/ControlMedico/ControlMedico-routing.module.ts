import { NgModule } from '@angular/core';
import { PacienteComponent } from './paciente/paciente.component';
import { RouterModule, Routes } from '@angular/router';
import { NutridatosBasicosComponent } from './nutridatosbasicos/nutridatosbasicos.component';
import { NutripacientediametrosComponent } from './nutripacientediametros/nutripacientediametros.component';
import { NutripacienteplieguesComponent } from './nutripacientepliegues/nutripacientepliegues.component';
import { TbpacientesComponent } from './tbpacientes/tbpacientes.component';
import { GraficosResultadosComponent } from './GraficosResultados/GraficosResultados.component';
import { GraficosDetalleComponent } from './GraficosDetalle/GraficosDetalle.component';
import { HomeComponent } from '../ControlPrincipal/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      //=====================================================================================
      { path: 'TbpacientesComponent',    component: TbpacientesComponent },
      { path: 'paciente/:id', component: PacienteComponent },
      //=====================================================================================
      //? Nutricion
      { path: 'infoBasicos',   component: NutridatosBasicosComponent },
      { path: 'infoDiametros', component: NutripacientediametrosComponent },
      { path: 'infoPligues/:id',   component: NutripacienteplieguesComponent },
      //? Nutricion
      { path: 'resultados/:id/:id',component: GraficosDetalleComponent },
      { path: 'resultados',component: GraficosResultadosComponent },
      { path: '**', redirectTo: '/Control/inicio' }
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
