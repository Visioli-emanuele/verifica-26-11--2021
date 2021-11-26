import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Visioli1Component } from './visioli1/visioli1.component';
import { Visioli2Component } from './visioli2/visioli2.component';
import { Visioli3Component } from './visioli3/visioli3.component';

@NgModule({
  declarations: [
    AppComponent,
    Visioli1Component,
    Visioli2Component,
    Visioli3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
