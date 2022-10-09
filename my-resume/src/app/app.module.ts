import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SelectorComponent } from './components/selector/selector.component';
import { TabsService } from './services/tabs.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TabsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
