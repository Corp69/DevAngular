import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomiciliosComponent } from './domicilios/domicilios.component';
import { HomeComponent } from './home/home.component';
import { ConfirmacionComponent } from './msj/confirmacion/confirmacion.component';
import { AdvertenciaComponent } from './msj/advertencia/advertencia.component';
import { ErrorComponent } from './msj/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
     { path: 'domicilio', component: DomiciliosComponent },
     { path: 'confirmacion', component: ConfirmacionComponent },
     { path: 'advertencia', component: AdvertenciaComponent },
     { path: 'error', component: ErrorComponent }
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
