import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HeroSettings} from "../hero-settings";
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.css']
})
export class UpdateHeroComponent implements OnInit {

  constructor(
      private heroService: HeroService
  ) { }

  ngOnInit() {
  }

  @Output()
  settingsChangeEvent = new EventEmitter();

  @Input()
  hero: Hero;

  @Input()
  heroSettings: HeroSettings;

  makeHeroEditable() {

    const settingsExtension: HeroSettings = {
      isBeingEdited: true
    };

    this.settingsChangeEvent.emit({
      value: settingsExtension
    })

  }

  updateHero() {
    console.log(0, this.hero);
    this.heroService.updateHero(this.hero).subscribe(hero => {
      //update resource...

      const settingsExtension: HeroSettings = {
        isBeingEdited: false
      };

      this.settingsChangeEvent.emit({
        value: settingsExtension
      })

    });
  }

}
