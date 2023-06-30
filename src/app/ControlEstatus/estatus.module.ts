import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalestatusComponent } from './principalestatus/principalestatus.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { MaterialModule } from '../material/material.module';
import { EstatusModuleRoutingModule } from './Estatus-routing.module';



@NgModule({
  declarations: [
    PrincipalestatusComponent,
    Pagina404Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EstatusModuleRoutingModule
  ]
})
export class EstatusModule { }
