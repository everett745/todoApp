import {NgModule} from '@angular/core';

import {AuthComponent} from './auth.component';

import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent
  ],
  providers: []
})

export class AuthModule {}
