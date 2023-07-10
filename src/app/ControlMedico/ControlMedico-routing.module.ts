import { NgModule } from '@angular/core';
import { PacienteComponent } from './paciente/paciente.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { NutridatosBasicosComponent } from './nutridatosbasicos/nutridatosbasicos.component';
import { NutripacientediametrosComponent } from './nutripacientediametros/nutripacientediametros.component';
import { NutripacienteplieguesComponent } from './nutripacientepliegues/nutripacientepliegues.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'Paciente', component: PacienteComponent },
      //=====================================================================================
      //? Nutricion
      { path: 'nutricionBasicos',   component: NutridatosBasicosComponent },
      { path: 'nutricionDiametros', component: NutripacientediametrosComponent },
      { path: 'nutricionPligues',   component: NutripacienteplieguesComponent },
      //=====================================================================================
      { path: 'Principal',component: PrincipalComponent },
      { path: '**', redirectTo: 'Paciente' }
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
