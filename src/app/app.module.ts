import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DorneComponent } from './dorne/dorne.component';
import { WinterfellComponent } from './winterfell/winterfell.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DorneComponent,
    WinterfellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
