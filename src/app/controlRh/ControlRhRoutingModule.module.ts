import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoComponent } from './departamento/departamento.component';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { PuestoComponent } from './puesto/puesto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'inicio', component: PrincipalComponent },
      { path: 'departamento', component: DepartamentoComponent },
      { path: 'departamento/:id', component: DepartamentoComponent },
      { path: 'puesto', component: PuestoComponent },
      { path: 'puesto/:id', component: PuestoComponent },
      { path: '**', redirectTo: '/ControlRh/inicio' }
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


export class ControlRhRoutingModule { }
