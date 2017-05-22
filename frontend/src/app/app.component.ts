import { Component } from '@angular/core';
import {HeroService} from "./hero.service";
import {Hero} from "./hero";

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
          console.log(this.heroes);
        })
      });
    }, errorResp => {
      console.log('something went wrong:', errorResp);
    })
  }


  public appendToList(evt) {
    this.heroes.push(evt.value);
  }


}
