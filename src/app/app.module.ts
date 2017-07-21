import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//
import { AppRoutingModule } from './app-routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
//
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { BadgesInDropdownComponent } from './badges-in-dropdown/badges-in-dropdown.component';
import { NavComponent } from './nav/nav.component';
import { HighlightComponent } from './highlight/highlight.component';
import { SourceService } from './highlight/source.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    CollapsibleComponent,
    BadgesInDropdownComponent,
    NavComponent,
    HighlightComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    HighlightJsModule,
  ],
  providers: [
    HighlightJsService,
    SourceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
