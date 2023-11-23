import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { PrincipalModuleRoutingModule } from './principal-module-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
//=======================================
//! modulos personalizados Librerias 
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
//=======================================
//? modulos personalizados reutilizar codigo 
import { DlgappModule } from '../shared/components/DlgappModule.module';
import { PrimeNgKpisModule } from '../shared/Modulos/PrimeNgKpisModule.module';
import { ComprasModule } from '../controlCompras/compras.module';
import { ControlMedicoModule } from '../ControlMedico/ControlMedico.module';
import { ControlEmpresaModule } from '../ControlEmpresa/ControlEmpresa.module';
import { VentasModule } from '../ControlVentas/ventas.module';
import { TesteoFormatosModule } from '../TesteoFormatos/TesteoFormatos.module';
import { ControlContabilidad } from '../ControlContabilidad/ControlContabilidad.module';
import { GeneralModule } from '../ControlGeneral/GeneralModule.module';


@NgModule({
  declarations: [
    HomeComponent,
    PrincipalComponent
  ],
  imports: [
    //? ===================================================== 
    //? modulos de los aplicativos 
    ControlEmpresaModule,
    ComprasModule,
    ControlMedicoModule,
    VentasModule,
    TesteoFormatosModule,
    ControlContabilidad,
    GeneralModule,
    //? ======================================================= 
    CommonModule,
    ReactiveFormsModule,
    //=======================================
    //? modulos personalizados reutilizar codigo 
    DlgappModule,
    //=======================================
    //! modulos personalizados Librerias 
    PrimeNgKpisModule,
    PrimeNgModule,
    //=======================================
    PrincipalModuleRoutingModule,
  ]
})
export class PrincipalModule { }
