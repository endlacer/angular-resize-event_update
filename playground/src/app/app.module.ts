import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResizedDirective } from 'angular-resize-event';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResizedDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
