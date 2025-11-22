import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.html',
  styleUrls: ['./articles.css'],
  imports:[FormsModule,CommonModule]
})
export class Articles {
  articles = [
  { titre: 'Soins des Chiens', contenu: 'Les bases des soins vétérinaires pour chiens.' },
  { titre: 'Nutrition Féline', contenu: 'Comprendre les besoins nutritionnels des chats.' }
];

nouveauTitre: string = '';
nouveauContenu: string = '';

ajouterArticle() {
  if (this.nouveauTitre && this.nouveauContenu) {
    this.articles.push({ titre: this.nouveauTitre, contenu: this.nouveauContenu });
    this.nouveauTitre = '';
    this.nouveauContenu = '';
  }
}

articles2 = [
  { titre: 'Vaccination Animale', contenu: 'Rôle et importance des vaccins chez les animaux.', importance: 'élevée' },
  { titre: 'Premiers Secours Vétérinaires', contenu: 'Comment réagir rapidement face aux urgences animales.', importance: 'moyenne' },
  { titre: 'Comportement Animal', contenu: 'Introduction au comportement et au bien-être des animaux.', importance: 'faible' }
];


}