import { Component } from '@angular/core';
import {HeroService} from "./hero.service";
import {Hero} from "./hero";
import {EmittedEvent} from "./emitted-event";
import {BroadcastService} from "./broadcast.service";
import {environment} from "environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

}
