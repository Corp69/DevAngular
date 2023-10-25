import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
//========================================
//Angular Graficos
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TimelineModule } from 'primeng/timeline';
import { ChartModule } from 'primeng/chart';


@NgModule({
  exports: [
    TimelineModule,
    OrganizationChartModule,
    ChartModule,
    NgChartsModule,
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: NgChartsConfiguration, useValue: { generateColors: false } }
  ]
})

export class PrimeNgKpisModule { }