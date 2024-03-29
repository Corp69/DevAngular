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
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule } from '@angular/forms';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PickListModule } from 'primeng/picklist';
import {CheckboxModule} from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [
    AccordionModule,
    CalendarModule,
    CheckboxModule,
    MegaMenuModule,
    MenuModule,
    MenubarModule,
    PickListModule,
    FormsModule,
    SidebarModule,
    DropdownModule,
    ButtonModule,
    RippleModule,
    DividerModule,
    MessageModule,
    MessagesModule,
    //========================================
    //Tablas: Angular PrimeNG 
    TableModule,
    TabMenuModule,
    TabViewModule,
    ToastModule,
    //Cards: Angular PrimeNG 
    CardModule,
    //dialogo o modal: Angular PrimeNG 
    DialogModule,
    ConfirmDialogModule,
    //menu: Angular PrimeNG 
    BadgeModule,
    PanelModule,
    PanelMenuModule,
    BlockUIModule,
    ProgressSpinnerModule,
    DropdownModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
    //{ provide: NgChartsConfiguration, useValue: { generateColors: false } }
  ]
})

export class PrimeNgModule { }