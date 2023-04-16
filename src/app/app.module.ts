import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './admin/header/header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import {LayoutComponent} from "./admin/layout.component";
import { BreacrumbsComponent } from './admin/breacrumbs/breacrumbs.component';
import { ClientViewComponent } from './clients/client-view/client-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    BreacrumbsComponent,
    ClientViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
