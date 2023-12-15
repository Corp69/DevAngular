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

@NgModule({
  declarations: [
    DocventaComponent
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
