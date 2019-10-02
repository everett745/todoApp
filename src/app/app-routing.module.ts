import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToDoComponent} from './toDo/toDo.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todo', component: ToDoComponent},
  {path: 'register', component: AuthComponent},
  {path: 'login', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
