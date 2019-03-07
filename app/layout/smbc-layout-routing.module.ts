import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SmbcLayoutComponent} from './smbc-layout.component'

const routes: Routes = [
  { path: '' , component: SmbcLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmbcLayoutRoutingModule { }
