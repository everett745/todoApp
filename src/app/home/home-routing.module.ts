import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ToDoComponent} from './toDo/toDo.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuardSerivce} from '../core/services';
import {HomeComponent} from './home.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: ':username', component: HomeComponent},
      {path: ':username/page', component: ProfileComponent, canActivate: [AuthGuardSerivce]},
      {path: ':username/todo', component: ToDoComponent, canActivate: [AuthGuardSerivce]},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
