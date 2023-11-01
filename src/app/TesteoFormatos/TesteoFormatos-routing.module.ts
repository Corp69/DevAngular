import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      //{ path: 'caja', component: InputsComponent },
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
export class TesteoFormatosRoutingModule { }
