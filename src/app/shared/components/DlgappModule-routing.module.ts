import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClaveProdServcpComponent } from './Sat/ClaveProdServcp/ClaveProdServcp.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'claveServiciocp', component: ClaveProdServcpComponent },
      { path: '**', redirectTo: '/app/claveServiciocp' }
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
