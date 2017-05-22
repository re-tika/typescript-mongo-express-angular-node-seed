import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";
import {HeroSettings} from "../hero-settings";
import {EmittedEvent} from "../emitted-event";
import {UtilsService} from "../utils.service";

@Component({
  selector: 'app-display-hero',
  templateUrl: './display-hero.component.html',
  styleUrls: ['./display-hero.component.css']
})
export class DisplayHeroComponent implements OnInit {

  constructor(
      private utilsService: UtilsService
  ) { }

  @Input()
  hero: Hero;

  ngOnInit() {
  }

  @Output()
  deleteHeroEvent = new EventEmitter();

  doDelete(evt) {
    this.deleteHeroEvent.emit(evt);
  }

  heroSettings: HeroSettings = {
    isBeingEdited: false
  };

  updateSettings(evt: EmittedEvent) {
    this.utilsService.mergeObjectTwoIntoObjectOne(this.heroSettings, evt.value);
  }

}
