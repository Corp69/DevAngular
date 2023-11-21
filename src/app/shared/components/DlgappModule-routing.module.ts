import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomiciliosComponent } from './domicilios/domicilios.component';
import { ConfirmacionComponent } from './msj/confirmacion/confirmacion.component';

const routes: Routes = [
  {
    path: '',
    children: [
     { path: 'domicilio', component: DomiciliosComponent },
     { path: 'confirmacion', component: ConfirmacionComponent }
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
