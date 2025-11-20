import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScoreComponent } from '../score/score';

interface Question {
  question: string;
  options: string[];
  reponse: string;
  userAnswer?: string;
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule, ScoreComponent],
  templateUrl: './game.html',
  styleUrls: ['./game.css'], 
})
export class GameComponent {
  questions: Question[] = [
    { question: 'Quel est le plus grand océan du monde ?', options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'], reponse: 'Pacifique' },
    { question: 'Quelle est la capitale de l\'Algérie ?', options: ['Alger', 'Tunis', 'Tanja'], reponse: 'Alger' },
    { question: 'Quelle est la couleur du ciel ?', options: ['Bleu', 'Vert', 'Rouge'], reponse: 'Bleu' }
  ];

  score: number = 0;
  correctCount: number = 0;
  wrongCount: number = 0;


  onSelectOption(option: string, q: Question) {
    if (q.userAnswer) return;

    q.userAnswer = option;
    if (option === q.reponse) {
      this.score += 10;
      this.correctCount++;
    } else {
      this.score -= 5;
      this.wrongCount++;
    }
  }

}