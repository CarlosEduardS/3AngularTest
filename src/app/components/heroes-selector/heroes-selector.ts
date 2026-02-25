import { Component, computed } from '@angular/core';
import { HeroesBase } from '../../heroes-base';
import { HeroesService } from '../../services/heroes-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-heroes-selector',
  imports: [RouterLink],
  templateUrl: './heroes-selector.html',
  styleUrl: './heroes-selector.scss',
})
export class HeroesSelector {
  readonly Heroes;

  constructor(private heroesServices: HeroesService) {
    this.Heroes = this.heroesServices.getHeroes();
  }

}
