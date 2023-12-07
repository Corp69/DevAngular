import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
import { ProductoComponent } from './producto/producto.component';
import { ControlGeneralRoutingModule } from './ControlGeneralRouting.module';
import { ImpuestosProductoServicioComponent } from './ImpuestosProductoServicio/ImpuestosProductoServicio.component';
import { DlgappModule } from '../shared/components/DlgappModule.module';


@NgModule({
  declarations: [
    ProductoComponent,
    ImpuestosProductoServicioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlGeneralRoutingModule,
    PrimeNgModule,
    DlgappModule
  ],
  providers: [
    DatePipe
  ]
})


export class GeneralModule { }
