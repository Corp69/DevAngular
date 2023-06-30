import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioFormatoComponent } from './InicioFormato/inicioFormato.component';
import { RouterModule, Routes } from '@angular/router';
import { InputsComponent } from './inputs/inputs.component';

const routes: Routes = [
  {
    path: '',
    component: InicioFormatoComponent,
    children: [
      { path: 'caja', component: InputsComponent },
      { path: '**', redirectTo: 'caja' }
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
export class TesteoFormatosRoutingModule { }
