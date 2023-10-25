import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
//========================================
//Angular Graficos
//import { NgChartsConfiguration } from 'ng2-charts';
//========================================
//Angular Material
import { MaterialModule } from 'src/app/material/material.module';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [

  ],
  exports:[

  ],
  imports: [
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
    //{ provide: NgChartsConfiguration, useValue: { generateColors: false } }
  ]
})

export class PrimeNgKpisModule { }