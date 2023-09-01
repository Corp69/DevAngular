import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../ControlPrincipal/home/home.component';
import { InvProductoComponent } from './inv-producto/invproducto.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      //=====================================================================================
      { path: 'inicio',    component: InicioComponent },
      { path: 'producto',    component: InvProductoComponent },
      { path: 'almacenes',    component: AlmacenesComponent },
      //=====================================================================================
      //? Sat
      { path: 'satPdroducto',    component: InvProductoComponent },
      //=====================================================================================
      { path: '**', redirectTo: '/ControlInventario/inicio' }
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
export class ControlInventariosRoutingModule { }
