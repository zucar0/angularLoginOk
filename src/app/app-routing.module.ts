import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth'},
  { path: 'auth', component: AuthComponent}, 
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard]},
  { path: '**', redirectTo:'/auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
