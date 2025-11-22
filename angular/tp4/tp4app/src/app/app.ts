import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Articles } from './articles/articles';
import { Produits } from './produits/produits';
import { Taches } from './taches/taches';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Welcome, Articles, Produits, Taches],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp4');
}