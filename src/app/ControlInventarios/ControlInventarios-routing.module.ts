import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvProductoComponent } from './inv-producto/invproducto.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'producto',     component: InvProductoComponent },
      { path: 'almacenes',    component: AlmacenesComponent },
      //=====================================================================================
      //? Sat
      { path: 'satPdroducto',    component: InvProductoComponent },
      //=====================================================================================
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
export class ControlInventariosRoutingModule { }
