import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { EmpresaComponent } from './empresa/empresa.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'Sucursal', component: SucursalComponent },
      { path: 'Empresa', component: EmpresaComponent },
      { path: '**', redirectTo: '/auth/login' }
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
