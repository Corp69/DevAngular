import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ControlEmpresaRoutingModule } from './ControlEmpresa-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
//=======================================
//! modulos personalizados Librerias 
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
import { MaterialModule } from '../shared/Modulos/material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    SucursalComponent,
    EmpresaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //=======================================
    //! modulos personalizados Librerias 
    PrimeNgModule,
    MaterialModule,
    //=======================================
    //routing
    ControlEmpresaRoutingModule
  ],
  providers: [
    DatePipe
  ]

})
export class ControlEmpresaModule { }
