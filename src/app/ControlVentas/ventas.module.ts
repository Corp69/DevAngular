import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ControlVentasRoutingModule } from './ControlInventarios-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DocventaComponent } from './docventa/docventa.component';
//=======================================
//! modulos personalizados Librerias 
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
import { MaterialModule } from '../shared/Modulos/material/material.module';
//=======================================
//? modulos personalizados reutilizar codigo 
import { DlgappModule } from '../shared/components/DlgappModule.module';

@NgModule({
  declarations: [
    HomeComponent,
    PrincipalComponent,
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
    MaterialModule,
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
