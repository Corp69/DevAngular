import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ControlVentasRoutingModule } from './ControlVenta-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DocventaComponent } from './docventa/docventa.component';
//=======================================
//! modulos personalizados Librerias 
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
//=======================================
//? modulos personalizados reutilizar codigo 
import { DlgappModule } from '../shared/components/DlgappModule.module';
import { ClienteComponent } from './cliente/cliente.component';
import { LstClienteComponent } from './lstcliente/lstcliente.component';
import { LstVentasComponent } from './lstventas/lstventas.component';

@NgModule({
  declarations: [
    DocventaComponent,
    ClienteComponent,
    LstClienteComponent,
    LstVentasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //=======================================
    //? modulos personalizados reutilizar codigo 
    DlgappModule,
    //=======================================
    //! modulos personalizados Librerias 
    PrimeNgModule,
    //PrimeNgKpisModule,
    //=======================================
    // routing
    ControlVentasRoutingModule
  ],
  providers: [
    DatePipe
  ]
})
export class VentasModule { }
