import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Hero} from "../hero";
import {HeroSettings} from "../hero-settings";
import {EmittedEvent} from "../emitted-event";
import {UtilsService} from "../utils.service";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-display-hero',
  templateUrl: './display-hero.component.html',
  styleUrls: ['./display-hero.component.css']
})
export class DisplayHeroComponent implements OnChanges, OnInit {

  constructor(
      private utilsService: UtilsService,
      private heroService: HeroService
  ) { }

  @Input()
  hero: Hero;

  heroCopy: Hero;

  ngOnInit() {
    this.heroCopy = this.utilsService.deepCopyData(this.hero);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.heroCopy = this.utilsService.deepCopyData(changes.hero.currentValue);
  }

  @Output()
  deleteHeroEvent = new EventEmitter();

  doDelete(evt) {
    this.deleteHeroEvent.emit(evt);
  }

  heroSettings: HeroSettings = {
    isBeingEdited: false
  };


  toggleEditable() {
    this.heroSettings.isBeingEdited = !this.heroSettings.isBeingEdited;
  }

  updateHero() {
    console.log(this.heroCopy, 'cpy')
    this.heroService.updateHero(this.heroCopy).subscribe(hero => {
      console.log(hero, 'hr');
      this.hero = hero;
      this.toggleEditable();
    });
  }

}
