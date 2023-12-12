import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { HomeComponent } from '../ControlPrincipal/home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { ImpuestosProductoServicioComponent } from './ImpuestosProductoServicio/ImpuestosProductoServicio.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'almacenes',    component: AlmacenesComponent },
      { path: 'producto/:id',    component: ProductoComponent },
      { path: 'impuestos/:id',    component: ImpuestosProductoServicioComponent },
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
