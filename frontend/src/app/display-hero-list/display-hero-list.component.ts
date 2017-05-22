import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-display-hero-list',
  templateUrl: './display-hero-list.component.html',
  styleUrls: ['./display-hero-list.component.css']
})
export class DisplayHeroListComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  private heroes: Hero[];

  ngOnInit() {
    this.heroService.getHeros().then(resp => {
      resp.forEach(heroObservable => {
        heroObservable.subscribe(hero => {
          this.heroes.push(hero);
        })
      });
    }, errorResp => {
      console.log('something went wrong:', errorResp);
    })
  }



}
