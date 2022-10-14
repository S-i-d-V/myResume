import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SelectorComponent } from './components/selector/selector.component';
import { TabsService } from './services/tabs.service';
import { TabComponent } from './components/tab/tab.component';
import { MeComponent } from './components/tab/me/presentation.component';
import { ContactComponent } from './components/tab/contact/contact.component';
import { SkillsComponent } from './components/tab/skills/skills.component';
import { EducationComponent } from './components/tab/education/education.component';
import { ExperienceComponent } from './components/tab/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
    HomeComponent,
    NotFoundComponent,
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
