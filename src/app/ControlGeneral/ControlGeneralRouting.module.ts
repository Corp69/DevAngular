import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../ControlPrincipal/home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { ImpuestosProductoServicioComponent } from './ImpuestosProductoServicio/ImpuestosProductoServicio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      //=====================================================================================
      { path: 'producto/:id',    component: ProductoComponent },
      { path: 'ImpuestosProducto/:id',    component: ImpuestosProductoServicioComponent },
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
export class ControlGeneralRoutingModule { }
