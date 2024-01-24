import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocventaComponent } from './docventa/docventa.component';
import { HomeComponent } from '../ControlPrincipal/home/home.component';
import { LstClienteComponent } from './lstcliente/lstcliente.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'venta/:id',      component: DocventaComponent    },
      { path: 'lstClientes',     component: LstClienteComponent  },
      { path: 'Cliente/:id',    component: ClienteComponent     },
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
