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
import { ControlComprasRoutingModule } from './ControlCompra-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { LstProveedorComponent } from './lstProveedor/lstProveedor.component';
import { ListDcumentosComponent } from './listDocumentos/ListDcumentos.component';
import { DocCompraComponent } from './docCompra/DocCompra.component';
import { InicioComponent } from './inicio/inicio.component';
//========================================
// PrimeNG 
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ProveedorDomicilioComponent } from './proveedor-domicilio/ProveedorDomicilio.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DlgappModule } from '../shared/components/DlgappModule.module';
import { ClaveProdServcpComponent } from '../shared/components/Sat/ClaveProdServcp/ClaveProdServcp.component';
@NgModule({
  declarations: [
    HomeComponent,
    ProveedorComponent,
    LstProveedorComponent,
    ListDcumentosComponent,
    DocCompraComponent,
    InicioComponent,
    ProveedorDomicilioComponent
  ],
  imports: [
    DlgappModule,
    //========================================
    //Modulo: Compartido.
    MatIconModule,
    //========================================
    //Fechas: Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    //========================================
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ControlComprasRoutingModule,
    //========================================
    //Tablas: Angular PrimeNG 
    TableModule,
    TabMenuModule,
    TabViewModule,
    //Cards: Angular PrimeNG 
    CardModule,
    //dialogo o modal: Angular PrimeNG 
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ]
})


export class ComprasModule { }
