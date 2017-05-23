import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { DeleteHeroComponent } from './delete-hero/delete-hero.component';
import { DisplayHeroComponent } from './display-hero/display-hero.component';
import { DisplayHeroListComponent } from './display-hero-list/display-hero-list.component';
import {ResourceService} from "./resource.service";
import {HeroService} from "./hero.service";
import {UtilsService} from "./utils.service";

@NgModule({
  declarations: [
    AppComponent,
    CreateHeroComponent,
    DeleteHeroComponent,
    DisplayHeroComponent,
    DisplayHeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      ResourceService,
      HeroService,
      UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
