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
          this.heroes.push(hero);
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
