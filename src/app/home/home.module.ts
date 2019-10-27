import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {ToDoComponent} from './toDo/toDo.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';


@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ToDoComponent,
    ProfileComponent,
  ]
})

export class HomeModule {}
