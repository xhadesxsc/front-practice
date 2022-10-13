import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { MenuComponent } from './menu/menu.component';
import {MaterialModule} from './material/material.module';
import { IndexPromedioComponent } from './index/index-promedio/index-promedio.component';
import { AddVentaComponent } from './ventas/add-venta/add-venta.component';
import { FormVentaComponent } from './ventas/form-venta/form-venta.component';
import { ListVentaComponent } from './ventas/list-venta/list-venta.component';
import { EditVentaComponent } from './ventas/edit-venta/edit-venta.component';
import { IndexVentaComponent } from './ventas/index-venta/index-venta.component';
import { SeguridadInterceptorService } from './seguridad/seguridad-interceptor.service';
import { LoginComponent } from './seguridad/login/login.component';
import { FormAutenticacionComponent } from './seguridad/form-autenticacion/form-autenticacion.component';
import { TwoDigitDecimaNumberDirective } from './validadores/two-digit-decima-number.directive';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarErroresComponent,
    MenuComponent,
    IndexPromedioComponent,
    AddVentaComponent,
    FormVentaComponent,
    ListVentaComponent,
    EditVentaComponent,
    IndexVentaComponent,
    LoginComponent,
    FormAutenticacionComponent,
    TwoDigitDecimaNumberDirective,
    AutorizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,    
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SeguridadInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
