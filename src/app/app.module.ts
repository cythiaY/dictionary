import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NounsComponent } from './noun.component';
import { WordDetailComponent } from './word-detail.component';
import { VerbsComponent } from './verbs.component';
import { WordService } from './word.service';
import { HeroSearchComponent } from './hero-search.component';
import { HeroSearchService } from './hero-search.service';
import { AppRoutingModule } from './app-routing.module';
import { AdjustiveComponent } from './adjustives.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    NounsComponent,
    WordDetailComponent,
    VerbsComponent,
    HeroSearchComponent,
    AdjustiveComponent
  ],
  providers: [WordService, HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
