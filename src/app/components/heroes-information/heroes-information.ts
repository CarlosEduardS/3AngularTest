import { Component, input } from '@angular/core';
import { HeroesBase } from '../../heroes-base';
import { HeroesService } from '../../services/heroes-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-heroes-information',
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes-information.html',
  styleUrl: './heroes-information.scss',
})
export class HeroesInformation {
  hero: HeroesBase | undefined;
  left: string = '';
  
  constructor(
    private route: ActivatedRoute,
    private heroservice: HeroesService,
    private location: Location
  ) {
    const origem = this.route.snapshot.paramMap.get('origem');
    this.left = String(origem);
  }
  
  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroservice.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}