import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
//========================================
//Angular Graficos
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { InvProductoComponent } from './inv-producto/invproducto.component';
import { ControlInventariosRoutingModule } from './ControlInventarios-routing.module';
import { SatprodservComponent } from './satprodserv/satprodserv.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { CobrosComponent } from './cobros/cobros.component';
import { CajascortesComponent } from './cajascortes/cajascortes.component';
import { ListadoComponent } from './listado/listado.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    InvProductoComponent,
    SatprodservComponent,
    AlmacenesComponent,
    CobrosComponent,
    CajascortesComponent,
    ListadoComponent,
    HomeComponent,
    InicioComponent
    //=================================
    // Importaciones:
  
    //=================================
  ],
  imports: [
    CommonModule,
    //========================================
    //Angular Graficos
    NgChartsModule,
    //========================================
    //Fechas: Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    //========================================
    CommonModule,
    MaterialModule,
    MatTableModule,
    //========================================
    MatCardModule,
    MaterialModule,
    ReactiveFormsModule,
    ControlInventariosRoutingModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: NgChartsConfiguration, useValue: { generateColors: false } }
  ]
})
export class ControlInventariosModule { }
