import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoComponent } from './departamento/departamento.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PuestoComponent } from './puesto/puesto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'empleado', component: EmpleadoComponent },
      { path: 'departamento', component: DepartamentoComponent },
      { path: 'departamento/:id', component: DepartamentoComponent },
      { path: 'puesto', component: PuestoComponent },
      { path: 'puesto/:id', component: PuestoComponent },
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


export class ControlRhRoutingModule { }
