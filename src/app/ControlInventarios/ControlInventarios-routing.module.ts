import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../ControlPrincipal/home/home.component';
import { InvProductoComponent } from './inv-producto/invproducto.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      //=====================================================================================
      { path: 'producto',    component: InvProductoComponent },
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
