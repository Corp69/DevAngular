import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioFormatoComponent } from './InicioFormato/inicioFormato.component';
import { InputsComponent } from './inputs/inputs.component';
import { MaterialModule } from '../material/material.module';
import { TesteoFormatosRoutingModule } from './TesteoFormatos-routing.module';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    InicioFormatoComponent,
    InputsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TesteoFormatosRoutingModule
  ]
})


export class TesteoFormatosModule { }
