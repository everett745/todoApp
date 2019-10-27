import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';


@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})

export class HeaderModule {}
