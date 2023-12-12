import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../shared/Modulos/PrimeNgModule.module';
import { ControlGeneralRoutingModule } from './ControlGeneralRouting.module';
import { DlgappModule } from '../shared/components/DlgappModule.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlGeneralRoutingModule,
    PrimeNgModule,
    DlgappModule
  ],
  providers: [
    DatePipe
  ]
})


export class GeneralModule { }
