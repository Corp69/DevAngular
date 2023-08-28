import { NgModule } from '@angular/core';
//========================================
//Fechas: Angular Material
import { CommonModule, DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ControlComprasRoutingModule } from './ControlCompra-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { LstProveedorComponent } from './lstProveedor/lstProveedor.component';
import { ListDcumentosComponent } from './listDocumentos/ListDcumentos.component';
import { DocCompraComponent } from './docCompra/DocCompra.component';
import { InicioComponent } from './inicio/inicio.component';
//========================================



@NgModule({
  declarations: [
  
  
    HomeComponent,
          ProveedorComponent,
          LstProveedorComponent,
          ListDcumentosComponent,
          DocCompraComponent,
          InicioComponent
  ],
  imports: [
    MatIconModule,
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
    ReactiveFormsModule,
    ControlComprasRoutingModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})


export class ComprasModule { }