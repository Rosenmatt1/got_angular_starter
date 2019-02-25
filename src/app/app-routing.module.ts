import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WinterfellComponent} from './winterfell/winterfell.component'
import {DorneComponent} from './dorne/dorne.component'

const routes: Routes = [

  {path: "winterfell", component: WinterfellComponent},
  {path: "dorne" , component: DorneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
