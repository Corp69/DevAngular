import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// modales 
import { DialogModule } from 'primeng/dialog';
import { DlgappModule } from '../shared/components/DlgappModule.module';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    //modales
    DialogModule,
    DlgappModule
  ]
})
export class AuthModule { }
