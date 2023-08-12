import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


export enum AuthenticationRoutes {
  Root = '',
  Login = 'login',
}

const routes: Routes = [
  { path: AuthenticationRoutes.Root, redirectTo: AuthenticationRoutes.Login, pathMatch: 'full' },
  { path: AuthenticationRoutes.Login, component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
