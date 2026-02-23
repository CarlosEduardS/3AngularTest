import { Component } from '@angular/core';
import { HeroesBase } from '../../heroes-base';
import { HeroesService } from '../../services/heroes-service';

@Component({
  selector: 'app-heroes-selector',
  imports: [],
  templateUrl: './heroes-selector.html',
  styleUrl: './heroes-selector.scss',
})
export class HeroesSelector {
  HeroesSelectorNew: HeroesBase[] = []

  constructor(private heroservice: HeroesService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroservice.getHeroes()
      .subscribe(HeroesSelector => this.HeroesSelectorNew = HeroesSelector)
  }
}
