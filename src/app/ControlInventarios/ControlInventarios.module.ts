import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInventariosRoutingModule } from './ControlInventarios-routing.module';
//=======================================
//! modulos personalizados Librerias 
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
//=======================================
//? modulos personalizados reutilizar codigo 
import { DlgappModule } from '../shared/components/DlgappModule.module';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { ProductoComponent } from './producto/producto.component';
import { ImpuestosProductoServicioComponent } from './ImpuestosProductoServicio/ImpuestosProductoServicio.component';

@NgModule({
  declarations: [
    AlmacenesComponent,
    ProductoComponent,
    ImpuestosProductoServicioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //=======================================
    //? modulos personalizados reutilizar codigo 
    DlgappModule,
    //=======================================
    PrimeNgModule,
    //=======================================
    // routing
    ControlInventariosRoutingModule
  ],
  providers: [
    DatePipe
  ]
})
export class ControlInventariosModule { }
