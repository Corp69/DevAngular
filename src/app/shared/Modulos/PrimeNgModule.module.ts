import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
//========================================
// PrimeNG 
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BadgeModule } from 'primeng/badge';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  exports: [
    //========================================
    //Tablas: Angular PrimeNG 
    TableModule,
    TabMenuModule,
    TabViewModule,
    //Cards: Angular PrimeNG 
    CardModule,
    //dialogo o modal: Angular PrimeNG 
    DialogModule,
    ConfirmDialogModule,
    //menu: Angular PrimeNG 
    BadgeModule,
    PanelModule,
    PanelMenuModule
  ],
  providers: [
    DatePipe,
      { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
    //{ provide: NgChartsConfiguration, useValue: { generateColors: false } }
  ]
})

export class PrimeNgModule { }