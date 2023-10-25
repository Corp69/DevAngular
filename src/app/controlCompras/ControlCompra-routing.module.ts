import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { DocCompraComponent } from './docCompra/DocCompra.component';
import { ListDcumentosComponent } from './listDocumentos/ListDcumentos.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { LstProveedorComponent } from './lstProveedor/lstProveedor.component';
import { ProveedorDomicilioComponent } from './proveedor-domicilio/ProveedorDomicilio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'lstDocumentos', component: ListDcumentosComponent },
      { path: 'DocCompra', component: DocCompraComponent },
      { path: 'lstProveedor', component: LstProveedorComponent },
      { path: 'Proveedor/:id', component: ProveedorComponent },
     // { path: 'Proveedor/:id', component: ProveedorComponent,  resolve: { data: ProveedorResolver }},
      
      { path: 'ProveedorDomicilio', component: ProveedorDomicilioComponent },
      { path: '**', redirectTo: '/ControlCompras/inicio' }
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


export class ControlComprasRoutingModule { }
