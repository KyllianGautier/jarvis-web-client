import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';


export enum AppRoutes {
  Root = '',
  Home = 'home',
  Authentication = 'authentication'
}

const routes: Routes = [
  { path: AppRoutes.Root, redirectTo: AppRoutes.Home, pathMatch: 'full' },
  { path: AppRoutes.Home, loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: AppRoutes.Authentication, loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
