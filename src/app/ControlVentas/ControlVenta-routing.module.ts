import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocventaComponent } from './docventa/docventa.component';
import { HomeComponent } from '../ControlPrincipal/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'venta/:id', component: DocventaComponent },
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


export class ControlVentasRoutingModule { }
