import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../ControlPrincipal/home/home.component';
import { DiotComponent } from './diot/diot.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'diot', component: DiotComponent },
      { path: '**', redirectTo: '/Control/inicio' }
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


export class ControlContabilidadRoutingModule { }
