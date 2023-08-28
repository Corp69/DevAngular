import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';
import { MaterialModule } from './material/material.module';
import { DlgProductoComponent } from './shared/components/dlg-producto/dlg-producto.component';
import { DocCompraComponent } from './controlCompras/docCompra/DocCompra.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPagesComponent,
    DlgProductoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
