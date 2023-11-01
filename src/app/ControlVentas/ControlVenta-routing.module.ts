import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocventaComponent } from './docventa/docventa.component';

const routes: Routes = [
  {
    path: '',
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
