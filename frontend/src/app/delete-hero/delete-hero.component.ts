import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-delete-hero',
  templateUrl: './delete-hero.component.html',
  styleUrls: ['./delete-hero.component.css']
})
export class DeleteHeroComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  @Input()
  hero: Hero;

  public deleteHero() {
    //TODO: dont delete in child... not da owner... or its okay to delete here, but dont refresh here...?
    this.heroService.deleteHero(this.hero.uid);
  }

}
