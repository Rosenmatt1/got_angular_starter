import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DorneComponent } from './dorne/dorne.component';
import { WinterfellComponent } from './winterfell/winterfell.component';
import { EssosComponent } from './essos/essos.component';
import { BraavosComponent } from './braavos/braavos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DorneComponent,
    WinterfellComponent,
    EssosComponent,
    BraavosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
