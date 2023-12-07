import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DiotComponent } from './diot/diot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
import { DlgappModule } from '../shared/components/DlgappModule.module';
import { ControlContabilidadRoutingModule } from './ControlContabilidad-routing.module';



@NgModule({
  declarations: [
    DiotComponent
  ],
  imports: [
    ControlContabilidadRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    //=======================================
    //? modulos personalizados reutilizar codigo 
    DlgappModule,
    //=======================================
    //! modulos personalizados Librerias 
    PrimeNgModule
  ],
  providers: [
    DatePipe
  ]
})
export class ControlContabilidad { }
