import { Component } from '@angular/core';
import { HeroesBase } from '../../heroes-base';
import { HeroesService } from '../../services/heroes-service';

@Component({
  selector: 'app-heroes-classification',
  imports: [],
  templateUrl: './heroes-classification.html',
  styleUrl: './heroes-classification.scss',
})
export class HeroesClassification {
  Hero: HeroesBase[] = []

  constructor(private heroesservices: HeroesService) {}

  ngOnInit(): void {
    this.getHeroes();
    this.orgHeroes();
  }

  getHeroes(): void {
    this.heroesservices.getHeroes()
      .subscribe(HeroesSelected => this.Hero = HeroesSelected);
  }
  
  orgHeroes() {
    for (let pos = 0; pos < this.Hero.length; pos++) {
      let save_actual = this.Hero[pos]
      for (let i = 0; i < 12; i++){
        
        if (this.Hero[pos].strengh > this.Hero[i].strengh) {
          this.Hero[pos] = this.Hero[i];
          this.Hero[i] = save_actual;
          console.log(`trocar ${this.Hero[pos].name} pelo ${this.Hero[i].name}`);
          console.log(`trocar pos: ${pos} pelo i: ${i}?`);
          i = 0;
        }
      }
    }
    this.Hero = this.Hero.slice(0, 5);
  }
}
