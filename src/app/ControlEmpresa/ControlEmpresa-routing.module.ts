import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { EmpresaComponent } from './empresa/empresa.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'sucursal', component: SucursalComponent },
      { path: 'empresa', component: EmpresaComponent },
      { path: '**', redirectTo: '/ControlEmpresa/empresa' }
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
