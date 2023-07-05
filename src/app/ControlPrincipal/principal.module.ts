import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { MaterialModule } from '../material/material.module';
import { PrincipalModuleRoutingModule } from './principal-module-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PrincipalModuleRoutingModule
  ]
})
export class PrincipalModule { }
