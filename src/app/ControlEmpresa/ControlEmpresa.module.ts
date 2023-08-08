import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { MaterialModule } from '../material/material.module';
import { ControlEmpresaRoutingModule } from './ControlEmpresa-routing.module';
import { SuperiorComponent } from '../shared/components/superior/superior.component';



@NgModule({
  declarations: [
    HomeComponent,
    SucursalComponent,
    EmpresaComponent
    //=================================
    // Importaciones:
    //=================================
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ControlEmpresaRoutingModule
  ]
})
export class ControlEmpresaModule { }
