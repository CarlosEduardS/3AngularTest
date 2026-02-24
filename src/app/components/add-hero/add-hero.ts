import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroesService } from '../../services/heroes-service';

@Component({
  selector: 'app-add-hero',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-hero.html',
  styleUrl: './add-hero.scss',
})

export class AddHero {
  NewName: string = '';
  NewInfo: string = '';
  NewStrengh: number = 1;
  IsName: boolean = true;

  constructor(private heroesServices: HeroesService) {}

  VerName() {
    if (this.NewName == '' || this.NewName == ' ') {
      this.IsName = false;
    } else {
      this.IsName = true;
      this.addHero();
      alert(`Heroi adicionado ${this.NewName}`)
    }
  }

  addHero() {
    this.heroesServices.addHero(this.NewName, this.NewInfo, this.NewStrengh)
  }
}
