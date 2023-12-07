import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucursalComponent } from './sucursal/sucursal.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from '../ControlPrincipal/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'sucursal', component: SucursalComponent },
      { path: 'empresa', component: EmpresaComponent },
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

export class ControlEmpresaRoutingModule { }
