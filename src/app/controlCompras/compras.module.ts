import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlComprasRoutingModule } from './ControlCompra-routing.module';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { LstProveedorComponent } from './lstProveedor/lstProveedor.component';
import { ListDcumentosComponent } from './listDocumentos/ListDcumentos.component';
import { DocCompraComponent } from './docCompra/DocCompra.component';
import { ProveedorDomicilioComponent } from './proveedor-domicilio/ProveedorDomicilio.component';
//=======================================
//! modulos personalizados Librerias 
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
import { MaterialModule } from '../shared/Modulos/material/material.module';
//=======================================
//? modulos personalizados reutilizar codigo 
import { DlgappModule } from '../shared/components/DlgappModule.module';

@NgModule({
  declarations: [
    ProveedorComponent,
    LstProveedorComponent,
    ListDcumentosComponent,
    DocCompraComponent,
    ProveedorDomicilioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlComprasRoutingModule,
    //=======================================
    //? modulos personalizados reutilizar codigo 
    DlgappModule,
    //=======================================
    //! modulos personalizados Librerias 
    PrimeNgModule,
    MaterialModule
  ],
  providers: [
    DatePipe
  ]
})


export class ComprasModule { }
