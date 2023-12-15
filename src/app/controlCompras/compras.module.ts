import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlComprasRoutingModule } from './ControlCompra-routing.module';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ListDcumentosComponent } from './listDocumentos/ListDcumentos.component';
import { DocCompraComponent } from './docCompra/DocCompra.component';
import { ProveedorDomicilioComponent } from './proveedor-domicilio/ProveedorDomicilio.component';
//=======================================
//! modulos personalizados Librerias 
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
//=======================================
//? modulos personalizados reutilizar codigo 
import { DlgappModule } from '../shared/components/DlgappModule.module';
import { LstproveedoresComponent } from './lstproveedores/lstproveedores.component';

@NgModule({
  declarations: [
    ProveedorComponent,
    ListDcumentosComponent,
    DocCompraComponent,
    ProveedorDomicilioComponent,
    LstproveedoresComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlComprasRoutingModule,
    //=======================================
    //? modulos personalizados reutilizar codigo 
    DlgappModule,
    PrimeNgModule
  ],
  providers: [
    DatePipe
  ]
})


export class ComprasModule { }
