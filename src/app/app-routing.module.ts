import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';
import {ClearPageComponent} from './home/clear-page/clear-page.component';


const routes: Routes = [
  {path: '', component: ClearPageComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, loadChildren: './home/home.module#HomeModule'},
  {path: 'register', component: AuthComponent},
  {path: 'login', component: AuthComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
