import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { HomeComponent } from '../ControlPrincipal/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'almacenes',    component: AlmacenesComponent },
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
