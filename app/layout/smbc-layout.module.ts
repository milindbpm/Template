import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component'
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { SmbcLayoutRoutingModule } from './smbc-layout-routing.module'
import { SmbcLayoutComponent } from './smbc-layout.component';


@NgModule({
  declarations: [SmbcLayoutComponent, HeaderComponent, LeftSidebarComponent, RightSidebarComponent ],
  imports: [
    CommonModule,
    SmbcLayoutRoutingModule
  ]
})
export class SmbcLayoutModule { }
