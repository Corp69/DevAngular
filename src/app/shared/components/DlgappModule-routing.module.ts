import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomiciliosComponent } from './domicilios/domicilios.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
     { path: 'domicilio', component: DomiciliosComponent },
     // { path: '**', redirectTo: '/app/claveServiciocp' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})

export class dlgBusquedasModuleRoutingModule { }
