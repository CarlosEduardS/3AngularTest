import { Component, input } from '@angular/core';
import { HeroesBase } from '../../heroes-base';
import { HeroesService } from '../../services/heroes-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes-information',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './heroes-information.html',
  styleUrl: './heroes-information.scss',
})
export class HeroesInformation {
  readonly heroSignal;
  left: string = '';
  
  constructor(
    private route: ActivatedRoute,
    private heroservice: HeroesService,
    private location: Location
  ) {
    const origem = this.route.snapshot.paramMap.get('origem');
    this.left = String(origem);

    this.heroSignal = this.heroservice.getHero(Number(this.route.snapshot.paramMap.get('id')));
  }

  goBack(): void {
    this.location.back();
  }
}