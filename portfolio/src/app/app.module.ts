import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectContentComponent } from './project-content/project-content.component';
import { ParagraphsComponent } from './contentTypes/paragraphs/paragraphs.component';
import { ImagesComponent } from './contentTypes/images/images.component';
import { VideosComponent } from './contentTypes/videos/videos.component';
import { LinksComponent } from './contentTypes/links/links.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    ProjectContentComponent,
    ParagraphsComponent,
    VideosComponent,
    ImagesComponent,
    LinksComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
