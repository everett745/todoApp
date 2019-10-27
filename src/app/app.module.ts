import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import {HeaderModule} from './shared/layout';
import {SharedModule} from './shared';
import {AuthModule} from './auth/auth.module';
import {HomeModule} from './home/home.module';
import {ClearPageComponent} from './home/clear-page/clear-page.component';
import {ToastrModule} from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    ClearPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HeaderModule,
    HomeModule,

    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
