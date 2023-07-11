import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ControlVentasRoutingModule } from './ControlInventarios-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
//========================================
//Fechas: Angular Material
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
//========================================


@NgModule({
  declarations: [
    HomeComponent,
    PrincipalComponent
  ],
  imports: [
    //========================================
    //Fechas: Angular Material
    MatFormFieldModule,
    MatInputModule, 
    MatNativeDateModule, 
    MatDatepickerModule,
    //========================================
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    ControlVentasRoutingModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})
export class VentasModule { }
