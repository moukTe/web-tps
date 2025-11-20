import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './score.html',
  styleUrls: ['./score.css'],
})
export class ScoreComponent {
  @Input() score: number = 0;
  @Input() correct: number = 0;
  @Input() wrong: number = 0;
}