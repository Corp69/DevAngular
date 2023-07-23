import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocventaComponent } from './docventa/docventa.component';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'inicio', component: PrincipalComponent },
      { path: 'venta/:id', component: DocventaComponent },
      { path: '**', redirectTo: '/ControlVentas/inicio' }
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
