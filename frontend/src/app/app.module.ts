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
import {BroadcastService} from "./broadcast.service";
import { MainComponent } from './main/main.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdInputModule, MdCardModule, MdButtonModule} from '@angular/material';
import 'hammerjs';
import {UserService} from "./user.service";
import {NotifyService} from "./notify.service";
import { NotifyComponent } from './notify/notify.component';
//for angular material + mobile


@NgModule({
  declarations: [
    AppComponent,
    CreateHeroComponent,
    DeleteHeroComponent,
    DisplayHeroComponent,
    DisplayHeroListComponent,
    MainComponent,
    TopnavComponent,
    SignUpComponent,
    NotifyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule
  ],
  providers: [
      ResourceService,
      HeroService,
      UtilsService,
      BroadcastService,
      UserService,
      NotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
