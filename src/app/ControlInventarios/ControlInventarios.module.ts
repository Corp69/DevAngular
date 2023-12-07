import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInventariosRoutingModule } from './ControlInventarios-routing.module';
import { SatprodservComponent } from './satprodserv/satprodserv.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { CobrosComponent } from './cobros/cobros.component';
import { CajascortesComponent } from './cajascortes/cajascortes.component';
import { ListadoComponent } from './listado/listado.component';
import { InicioComponent } from './inicio/inicio.component';
//=======================================
//! modulos personalizados Librerias 
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
//=======================================
//? modulos personalizados reutilizar codigo 
import { DlgappModule } from '../shared/components/DlgappModule.module';


@NgModule({
  declarations: [
    SatprodservComponent,
    AlmacenesComponent,
    CobrosComponent,
    CajascortesComponent,
    ListadoComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //=======================================
    //? modulos personalizados reutilizar codigo 
    DlgappModule,
    //=======================================
    //! modulos personalizados Librerias 
    PrimeNgModule,
    //=======================================
    // routing
    ControlInventariosRoutingModule
  ],
  providers: [
    DatePipe
  ]
})
export class ControlInventariosModule { }
