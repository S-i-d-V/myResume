import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SelectorComponent } from './components/selector/selector.component';
import { TabsService } from './services/tabs.service';
import { TabComponent } from './components/tab/tab.component';
import { MeComponent } from './components/tab/me/me.component';
import { ContactComponent } from './components/tab/contact/contact.component';
import { SkillsComponent } from './components/tab/skills/skills.component';
import { EducationComponent } from './components/tab/education/education.component';
import { ExperienceComponent } from './components/tab/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SelectorComponent,
    TabComponent,
    MeComponent,
    ContactComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
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
