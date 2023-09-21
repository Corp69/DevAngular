import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/pages/login/guards/auth.guard';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';

const routes: Routes = [
  //=======================================================================================================================================================================================================================================================
  /**
   * @TestFormatos => hacemos las pruebas en CSS Y HTML PARA TOMAR LOS COMPONENTES A UTILIZAR A LOS OTROS CONTROLES.
   */
  {
    path: 'test',
    loadChildren: () => import('./TesteoFormatos/TesteoFormatos.module').then( m => m.TesteoFormatosModule ),
    canActivate:[ AuthGuard ],
    canMatch:[ AuthGuard] 
  },
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
    path: 'ControlRh',
    loadChildren: () => import('./controlRh/ControlRh.module').then( m => m.ControlRh ),
    //canActivate:[ AuthGuard ],
    //canMatch:[ AuthGuard] 
  },
  {
    path: 'ControlEscolar',
    loadChildren: () => import('./ControlEscolar/ControlEscolar.module').then( m => m.ControlEscolarModule ),
    canActivate:[ AuthGuard ],
    canMatch:[ AuthGuard] 
  },
  {
    path: 'ControlEmpresa',
    loadChildren: () => import('./ControlEmpresa/ControlEmpresa.module').then( m => m.ControlEmpresaModule ),
    canActivate:[ AuthGuard ],
    canMatch:[ AuthGuard] 
  },
  {
    path: 'ControlMedico',
    loadChildren: () => import('./ControlMedico/ControlMedico.module').then( m => m.ControlMedicoModule ),
    canActivate:[ AuthGuard ],
    canMatch:[ AuthGuard] 
  },
  {
    path: 'ControlInventario',
    loadChildren: () => import('./ControlInventarios/ControlInventarios.module').then( m => m.ControlInventariosModule ),
    canActivate:[ AuthGuard ],
    canMatch:[ AuthGuard] 
  },
  {
    path: 'ControlVentas',
    loadChildren: () => import('./ControlVentas/ventas.module').then( m => m.VentasModule ),
    canActivate:[ AuthGuard ],
    canMatch:[ AuthGuard] 
  },
  {
    path: 'ControlCompras',
    loadChildren: () => import('./controlCompras/compras.module').then( m => m.ComprasModule ),
    canActivate:[ AuthGuard ],
    canMatch:[ AuthGuard] 
  },
  {
    path: 'estatus',
    loadChildren: () => import('./ControlEstatus/estatus.module').then( m => m.EstatusModule ),
    canActivate:[ AuthGuard ],
    canMatch:[ AuthGuard] 
  },
  {
    path: 'app',
    loadChildren: () => import('./shared/components/DlgappModule.module').then( m => m.DlgappModule ),
    canActivate:[ AuthGuard ],
    canMatch:[ AuthGuard] 
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
