import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperiorComponent } from './superior/superior.component';

const routes: Routes = [
  {
    path: '',
    component: SuperiorComponent,
    children: [
    //  { path: 'inicio', component: PrincipalComponent },
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

export class dlgBusquedasModuleRoutingModule { }
