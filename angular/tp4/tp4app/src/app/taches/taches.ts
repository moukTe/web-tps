import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-taches',
  templateUrl: './taches.html',
  styleUrls: ['./taches.css'],
  imports: [CommonModule, FormsModule]
})
export class Taches {
  taches = [
    { description: 'Acheter CatFood', completee: false, priorite: 'haute' },
    { description: 'Acheter DogFood', completee: true, priorite: 'moyenne' },
    { description: 'Acheter CatToy', completee: false, priorite: 'basse' }
  ];

  toggleTache(tache: any) {
    tache.completee = !tache.completee;
  }
}