import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPromedioComponent } from './index/index-promedio/index-promedio.component';
import { AddVentaComponent } from './ventas/add-venta/add-venta.component';
import { IndexVentaComponent } from './ventas/index-venta/index-venta.component';
import { LoginComponent } from './seguridad/login/login.component';
import { EsAdminGuard } from './es-admin.guard';

const routes: Routes = [
  {path: 'notas', component: IndexPromedioComponent},
  {path: 'ventas/crear', component: AddVentaComponent, canActivate: [EsAdminGuard]},
  {path: 'ventas', component: IndexVentaComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: IndexPromedioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
