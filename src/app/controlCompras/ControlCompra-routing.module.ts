import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocCompraComponent } from './docCompra/DocCompra.component';
import { ListDcumentosComponent } from './listDocumentos/ListDcumentos.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { LstProveedorComponent } from './lstProveedor/lstProveedor.component';
import { ProveedorDomicilioComponent } from './proveedor-domicilio/ProveedorDomicilio.component';
import { HomeComponent } from '../ControlPrincipal/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'lstDocumentos', component: ListDcumentosComponent },
      { path: 'DocCompra', component: DocCompraComponent },
      { path: 'lstProveedor', component: LstProveedorComponent },
      { path: 'Proveedor/:id', component: ProveedorComponent },
     // { path: 'Proveedor/:id', component: ProveedorComponent,  resolve: { data: ProveedorResolver }},
      
      { path: 'ProveedorDomicilio', component: ProveedorDomicilioComponent },
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


export class ControlComprasRoutingModule { }
