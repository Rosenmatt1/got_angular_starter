import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WinterfellComponent} from './winterfell/winterfell.component'
import {DorneComponent} from './dorne/dorne.component'
import {EssosComponent } from './essos/essos.component'
import {BraavosComponent } from './braavos/braavos.component'

const routes: Routes = [

  {path: "winterfell", component: WinterfellComponent},
  {path: "dorne", component: DorneComponent},
  {path: "essos", component: EssosComponent},
  {path: "braavos", component: BraavosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
