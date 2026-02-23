import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { HeroesClassification } from './components/heroes-classification/heroes-classification';
import { HeroesSelector } from './components/heroes-selector/heroes-selector';
import { HeroesInformation } from './components/heroes-information/heroes-information';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'classification', component: HeroesClassification},
    {path: 'selector', component: HeroesSelector},
    {path: 'information/:id/:origem', component: HeroesInformation},
];
