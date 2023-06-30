import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina404Component } from './pagina404/pagina404.component';
import { PrincipalestatusComponent } from './principalestatus/principalestatus.component';



const routes: Routes = [
  {
    path: '',
    component: PrincipalestatusComponent,
    children: [
      { path: '404', component: Pagina404Component },
      { path: '**', redirectTo: '404' }
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
export class EstatusModuleRoutingModule { }
