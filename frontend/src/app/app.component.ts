import { Component } from '@angular/core';
import {HeroService} from "./hero.service";
import {Hero} from "./hero";
import {EmittedEvent} from "./emitted-event";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private heroService: HeroService) {

  }

  private heroes: Hero[] = [];

  ngOnInit() {
    this.heroService.getHeros().then(resp => {
      resp.forEach(heroObservable => {
        heroObservable.subscribe(hero => {
          const heroesInListThatMatchFetchedHero = this.heroes.filter(heroInList => heroInList.uid === hero.uid);
          if (heroesInListThatMatchFetchedHero.length === 0) {
            //insert the hero if he's not found yet
            this.heroes.push(hero);
          } else if (heroesInListThatMatchFetchedHero.length === 1) {
            //update the hero if he's already in the list
            heroesInListThatMatchFetchedHero[0] = hero;
          } else {
            console.error('Found same hero in list more than once');
          }
        })
      });
    }, errorResp => {
      console.error('something went wrong when getting heroes:', errorResp);
    })
  }

  public appendToList(evt: EmittedEvent) {
    this.heroes.push(evt.value);
  }

  public doDelete(evt: EmittedEvent) {
    this.heroes = this.heroes.filter(hero => hero.uid !== evt.value);
  }

}
