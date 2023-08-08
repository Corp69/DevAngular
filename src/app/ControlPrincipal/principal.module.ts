import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { MaterialModule } from '../material/material.module';
import { PrincipalModuleRoutingModule } from './principal-module-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SuperiorComponent } from '../shared/components/superior/superior.component';



@NgModule({
  declarations: [
    HomeComponent,
    PrincipalComponent
  //=================================
  // Importaciones:
   
  //=================================
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    PrincipalModuleRoutingModule
  ]
})
export class PrincipalModule { }
