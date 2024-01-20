import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/pages/login/guards/auth.guard';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';

const routes: Routes = [
  //=======================================================================================================================================================================================================================================================
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'Control',
    loadChildren: () => import('./ControlPrincipal/principal.module').then( m => m.PrincipalModule ),
    canActivate:[ AuthGuard ],
    canMatch:[ AuthGuard] 
  },
  {
    path: 'app',
    loadChildren: () => import('./shared/components/DlgappModule.module').then( m => m.DlgappModule )
  },
  {
    path: '404',
    component: ErrorPagesComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '/auth/login'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
